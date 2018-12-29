const jwt = require('jwt-simple')
const moment = require('moment')
const errorGetter = require('../../../utils/errors')
const responser = require('../../../utils/responser')
const env = require('dotenv').config()
const config = require('../../../config')

const checkIsLogged = function () {
  return function (req, res, next) {
    console.log(req.headers)
    if (req.headers && req.headers.authorization) {
      try {
        let payload = jwt.decode(req.headers.authorization, config[process.env.NODE_ENV].secret)
        if (payload.exp <= moment().unix()) {
          next(errorGetter.getTokenExpired())
        }
        req.permissions = payload.permissions
        req.username = payload.username
        req.user_id = payload.user_id
        req.name = payload.name
        next()
      } catch (e) {
        let error = errorGetter.getUsuarioNoAutorizado()
        next(responser.createErrorResponse(error.status, error, error))
      }
    } else {
      let error = errorGetter.getUsuarioNoAutorizado()
      next(responser.createErrorResponse(error.status, error, error))
    }
  }
}


exports.checkIsLogged = checkIsLogged