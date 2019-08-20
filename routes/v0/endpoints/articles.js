'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const articleController = require('../../../controllers/articleController')
const verifyToken = require('../../../middlewares/auth').verifyToken()

router.get('/', verifyToken, handler(articleController.v0.finder))
router.post('/', verifyToken, handler(articleController.v0.create))
router.patch('/:id([0-9]+)', verifyToken, handler(articleController.v0.update))

module.exports = router