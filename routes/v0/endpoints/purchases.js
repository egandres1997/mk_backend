'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const purchaseHeaderController = require('../../../controllers/purchaseHeaderController')
const verifyToken = require('../../../middlewares/auth').verifyToken()

router.get('/', verifyToken, handler(purchaseHeaderController.v0.finder))
router.post('/', verifyToken, handler(purchaseHeaderController.v0.create))
router.patch('/:id([0-9]+)/status', verifyToken, handler(purchaseHeaderController.v0.status))

module.exports = router