'use-strict'

const responser = require('../utils/responser')
const taxService = require('../services').tax

const finder = async (req, res) => {
    const taxes = await taxService.finder(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, taxes))
}

const create = async (req, res) => {
    const tax = await taxService.create(req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, tax))
}

const update = async (req, res) => {
    const tax = await taxService.update(req.params.id, req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, tax))
}

module.exports = {
    v0: {
        finder,
        create,
        update
    }
}