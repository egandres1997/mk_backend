'use-strict'

const responser = require('../utils/responser')
const articleService = require('../services').article

const finder = async (req, res) => {
    const articles = await articleService.finder(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, articles))
}

const create = async (req, res) => {
    const article = await articleService.create(req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, article))
}

const update = async (req, res) => {
    const article = await articleService.update(req.params.id, req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, article))
}

module.exports = {
    v0: {
        finder,
        create,
        update
    }
}