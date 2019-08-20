'use strict'

const unautorizedUser = () => {
    let err = {}
    err.msg = 'Unauthorized user'
    err.status = 401
    return err
}

const tokenExpired = () => {
    let err = {}
    err.msg = 'Token expired'
    err.status = 404
    return err
}

const internalError = (msg) => {
    let err = {}
    err.msg = msg || 'Ocurrió un error interno'
    err.status = 500
    return err
}

const notFound = (msg) => {
    let err = {}
    err.msg = msg
    err.status = 404
    return err
}

const alreadyExists = (msg) => {
    let err = {}
    err.msg = msg
    err.status = 409
    return err
}

const notMatch = (msg, value1, value2) => {
    let err = {}
    err.msg = msg + ': ' + value1 + ' <> ' + value2
    err.status = 409
    return err
}

const badRequest = (msg) => {
    let err = {}
    err.msg = msg
    err.status = 400
    return err
}

const unprocessableEntity = (msg) => {
    let err = {}
    err.msg = msg
    err.status = 422
    return err
}

exports.unautorizedUser = unautorizedUser
exports.tokenExpired = tokenExpired
exports.internalError = internalError
exports.notFound = notFound
exports.alreadyExists = alreadyExists
exports.notMatch = notMatch
exports.badRequest = badRequest
exports.unprocessableEntity = unprocessableEntity
