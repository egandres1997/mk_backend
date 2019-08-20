'use-strict'

const responser = require('../utils/responser')
const measureService = require('../services').measure

const finder = async (req, res) => {
    const measures = await measureService.finder(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, measures))
}

const create = async (req, res) => {
    const measure = await measureService.create(req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, measure))
}

const update = async (req, res) => {
    const measure = await measureService.update(req.params.id, req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, measure))
}

module.exports = {
    v0: {
        finder,
        create,
        update
    }
}