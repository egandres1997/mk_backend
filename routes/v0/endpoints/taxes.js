'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const taxController = require('../../../controllers/taxController')
const verifyToken = require('../../../middlewares/auth').verifyToken()

router.get('/', verifyToken, handler(taxController.v0.finder))
router.post('/', verifyToken, handler(taxController.v0.create))
router.patch('/:id([0-9]+)', verifyToken, handler(taxController.v0.update))

module.exports = router