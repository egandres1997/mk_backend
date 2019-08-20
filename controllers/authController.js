'use-strict'

const responser = require('../utils/responser')
const authService = require('../services').auth

const token = async (req, res) => {
    const token = await authService.token(req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, token))
}

module.exports = {
    v0: {
        token
    }
}