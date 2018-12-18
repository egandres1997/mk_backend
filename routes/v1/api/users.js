const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/userController')

const {withError} = require('./helpers')

router.get('/', withError(userController.v1.list))

module.exports = router
