'use-strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
const models = require('../models')
let services = {}

fs
  .readdirSync('./services')
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename)
  })
  .forEach(function (file) {
    if (file.slice(-3) !== '.js') return
    let _service = require('../services/' + file.slice(0, -3))
    services[file.slice(0, -3)] = _service(models,services)
  })

module.exports = services