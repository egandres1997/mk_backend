'use-strict'

const responser = require('../utils/responser')
const categoryService = require('../services').category

const finder = async (req, res) => {
    const categories = await categoryService.finder(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, categories))
}

const parents = async (req, res) => {
    const categories = await categoryService.parents(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, categories))
}

const childrens = async (req, res) => {
    const categories = await categoryService.childrens(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, categories))
}

const create = async (req, res) => {
    const category = await categoryService.create(req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, category))
}

const update = async (req, res) => {
    const category = await categoryService.update(req.params.id, req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, category))
}

module.exports = {
    v0: {
        finder,
        parents,
        childrens,
        create,
        update
    }
}