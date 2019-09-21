'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const purchaseController = require('../../../controllers/purchaseController')
const verifyToken = require('../../../middlewares/auth').verifyToken()

router.get('/', verifyToken, handler(purchaseController.v0.finder))
router.post('/', verifyToken, handler(purchaseController.v0.create))
router.patch('/:id([0-9]+)/status', verifyToken, handler(purchaseController.v0.status))

module.exports = router