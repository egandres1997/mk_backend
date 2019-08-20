'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const measureController = require('../../../controllers/measureController')
const verifyToken = require('../../../middlewares/auth').verifyToken()

router.get('/', verifyToken, handler(measureController.v0.finder))
router.post('/', verifyToken, handler(measureController.v0.create))
router.patch('/:id([0-9]+)', verifyToken, handler(measureController.v0.update))

module.exports = router