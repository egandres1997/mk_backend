'use strict'

const getUsuarioNoAutorizado = () =>{
  let err = {}
  err.msg = 'Unauthorized user'
  err.status = 401
  return err
}

const getTokenExpired = () =>{
  let err = {}
  err.msg = 'Token expired'
  err.status = 404
  return err
}

const getServiceError = (msg) =>{
  let err = {}
  err.msg = msg || 'Ocurrió un error interno'
  err.status = 500
  return err
}

const getServiceErrorNotFound = (msg) =>{
  let err = {}
  err.msg = msg
  err.status = 404
  return err
}

const getServiceErrorAlreadyExists = (msg) =>{
  let err = {}
  err.msg = msg
  err.status = 409
  return err
}

const getServiceErrorNotMatch = (msg, value1, value2) =>{
  let err = {}
  err.msg = msg+': '+value1+' <> '+value2
  err.status = 409
  return err
}

const getServiceErrorBadRequest = (msg) =>{
  let err = {}
  err.msg = msg
  err.status = 400
  return err
}

exports.getUsuarioNoAutorizado = getUsuarioNoAutorizado
exports.getTokenExpired = getTokenExpired
exports.getServiceError = getServiceError
exports.getServiceErrorNotFound = getServiceErrorNotFound
exports.getServiceErrorAlreadyExists = getServiceErrorAlreadyExists
exports.getServiceErrorNotMatch = getServiceErrorNotMatch
exports.getServiceErrorBadRequest = getServiceErrorBadRequest