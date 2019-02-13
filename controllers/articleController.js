const models = require('../models')
const articleService = require('../services/articleService')(models)
const responser = require('../utils/responser')

const list = async function (req, res) {
  let articles = await articleService.findAll(req.query)
  res.statusCode = responser.codes.OK
  res.json(responser.createSuccessResponse(res.statusCode, articles))
}

const findLike = async function (req, res) {
	console.log(req.body)
  let articles = await articleService.findLike(req.body.toSearch)
  res.statusCode = responser.codes.OK
  res.json(responser.createSuccessResponse(res.statusCode, articles))
}

module.exports = {
  v1: {
    list,
    findLike
  }
}
