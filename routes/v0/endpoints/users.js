'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const userController = require('../../../controllers/userController')
const verifyToken = require('../../../middlewares/auth').verifyToken()

router.get('/', verifyToken, handler(userController.v0.finder))
router.post('/', verifyToken, handler(userController.v0.create))
router.patch('/:id([0-9]+)', verifyToken, handler(userController.v0.update))

module.exports = router