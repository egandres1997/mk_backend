const express = require('express')
const router = express.Router()
const menuController = require('../../../controllers/menuController')

const { withError } = require('./helpers')

router.get('/', withError(menuController.v1.list))

module.exports = router
