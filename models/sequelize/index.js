'use strict'

const env = require('dotenv').config()
const config = require('../../config/config')

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const db = {}

const data = {
  operatorsAliases: Sequelize.Op
}

let sequelize = new Sequelize(config[process.env.NODE_ENV].db_connection, data)

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename)
  })
  .forEach(function (file) {
    if (file.slice(-3) !== '.js') return
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.Sequelize = Sequelize

module.exports = db
