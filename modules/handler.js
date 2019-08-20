'use-strict'

const errors = require('../utils/errors')
const responser = require('../utils/responser')
const { ValidationError } = require('sequelize')

const handler = (method) => async (req, res) => {
    try {
        await method(req, res)
    } catch (e) {
        console.log("handler", e)
        if (e.status && e.msg) {
            res.status(e.status).json(responser.createResponse(e.status, e))
        } else if (e instanceof ValidationError) {
            const error = e.errors.map(error => error.message).join(', ')
            const httpCode = responser.codes.INTERNAL_SERVER_ERROR
            const httpStatus = responser.status.ERROR
            res.status(httpCode).json(responser.createErrorResponse(httpStatus, error))
        } else if (e.message) {
            const error = errors.internalError(e.message)
            res.status(error.status).json(responser.createErrorResponse(error.status, error))
        } else {
            const error = errors.internalError('An uncontrolled error occurred')
            res.status(error.status).json(responser.createErrorResponse(error.status, error))
        }
    }
}

module.exports = handler