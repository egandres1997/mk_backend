'use-strict'

const models = require('../../models')
const serviceProvider = require('../../providers/serviceProvider')
const userService = require('../../services/userService')(models, serviceProvider)

const findAll = async function (_, query) {
  return await userService.findAll(query)
}

module.exports = {
  findAll
}