const models = require('../models/sequelize')
const userService = require('../services/userService')(models)
const responser = require('../utils/responser')

const list = async function (req, res) {
  let users = await userService.findAll(req.query)
  res.statusCode = responser.codes.OK
  res.json(responser.createSuccessResponse(res.statusCode,users))
}

module.exports = {
  v1: {
    list
  }
}
