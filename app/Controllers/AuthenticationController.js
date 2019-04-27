'use-strict'

const models = require('../../models')
const responser = require('../../utils/responser')
const UserService = require('../Services/UserService')(models)

this.authenticate = async (req, res) => {
  const authentication = await UserService.authenticate(req.body)
  res.statusCode = responser.codes.OK
  res.json(responser.createSuccessResponse(res.statusCode, authentication))
}

module.exports = this