'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const categoryController = require('../../../controllers/categoryController')
const verifyToken = require('../../../middlewares/auth').verifyToken()

router.get('/', verifyToken, handler(categoryController.v0.finder))
router.get('/parents', verifyToken, handler(categoryController.v0.parents))
router.get('/childrens', verifyToken, handler(categoryController.v0.childrens))
router.post('/', verifyToken, handler(categoryController.v0.create))
router.patch('/:id([0-9]+)', verifyToken, handler(categoryController.v0.update))

module.exports = router