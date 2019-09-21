'use-strict'

const responser = require('../utils/responser')
const purchaseService = require('../services').purchase

const finder = async (req, res) => {
    const purchases = await purchaseService.finder(req.query)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, purchases))
}

const create = async (req, res) => {
    const purchase = await purchaseService.create(req.body)
    const httpCode = responser.codes.OK
    res.json(responser.createSuccessResponse(httpCode, purchase))
}

// const status = async (req, res) => {
//     const purchase = await purchaseService.status(req.params.id, req.body)
//     const httpCode = responser.codes.OK
//     res.json(responser.createSuccessResponse(httpCode, purchase))
// }

module.exports = {
    v0: {
        finder,
        create,
        // status
    }
}