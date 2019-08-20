'use-strict'

const responser = require('../utils/responser')
const errors = require('../utils/errors')
const jwt = require('jwt-simple')
const moment = require('moment')

const verifyToken = () => {
    return (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            try {
                const payload = jwt.decode(req.headers.authorization, process.env.TOKEN_SECRET)
                if (payload.exp <= moment().unix()) {
                    next(errors.getTokenExpired())
                }
                req.user_id = payload.user_id
                req.email = payload.email
                req.name = payload.name
                req.surname = payload.surname
                req.Roles = payload.Roles
                next()
            } catch (e) {
                let error = errors.unautorizedUser()
                res.status(error.status).json(responser.createErrorResponse(error.status, error))
            }
        } else {
            let error = errors.unautorizedUser()
            res.status(error.status).json(responser.createErrorResponse(error.status, error))
        }
    }
}

module.exports = {
    verifyToken
}