'use-strict'

const express = require('express')
const router = express.Router()
const handler = require('../../../modules/handler')
const authController = require('../../../controllers/authController')

router.post('/', handler(authController.v0.token))

module.exports = router