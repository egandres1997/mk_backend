'use strict'

const responser = require('../../../utils/responser')

exports.withError = (handler) => async(req, res) => {
  try {
    await handler(req, res)
  } catch (e) {
  	console.log(e)
    res.statusCode = e.status
    res.json(responser.createResponse(e.status,e,null))
  }
}
