'use-strict'

const responser = require('../utils/responser')
const userService = require('../services').user

const finder = async (req, res) => {
    const users = await userService.finder(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, users))
}

const create = async (req, res) => {
    const user = await userService.create(req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, user))
}

const update = async (req, res) => {
    const user = await userService.update(req.params.id, req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, user))
}

module.exports = {
    v0: {
        finder,
        create,
        update
    }
}