'use strict'
const Op = require('sequelize').Op
const sequelize = require('sequelize')
const errorGetter = require('../utils/errors')

module.exports = (models) => {
  return {
    findAll: () => {
    	console.log(models)
    },
  }
}
