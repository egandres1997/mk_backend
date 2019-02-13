const models = require('../models')
const menuService = require('../services/menuService')(models)
const responser = require('../utils/responser')

const list = async function (req, res) {
  let menus = await menuService.findAll(req.query)
  res.statusCode = responser.codes.OK
  res.json(responser.createSuccessResponse(res.statusCode, menus))
}

module.exports = {
  v1: {
    list
  }
}
