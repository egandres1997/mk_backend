'use-strict'

const errorGetter = require('./errors')
const responser = require('./responser')
const jwt = require('jwt-simple')
const { AuthenticationError } = require('apollo-server-express')

this.isUndefined = (value) => {
  return (value === undefined)
}

this.errorHandler = (err) => {
  if (err.status && err.msg) {
    return err
  }
  return errorGetter.getServiceError()
}

this.withError = (handler) => async (req, res) => {
  try {
    await handler(req, res)
  } catch (e) {
    res.status(e.code).json(responser.createResponse(e.code, e))
  }
}

this.authMiddleware = (req) => {
  const token = req.header('authorization')
  if (!token) {
    throw new AuthenticationError('you must be logged in')
  }
  const user = jwt.decode(token, process.env.SECRET)
  if (!user) {
    throw new AuthenticationError('you must be logged in')
  }
  return user
}

module.exports = this