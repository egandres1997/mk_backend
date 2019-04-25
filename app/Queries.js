'use strict'

const models = require('../models')

module.exports = {
  getAllUsers() {
    return models.User.findAll()
  }
}