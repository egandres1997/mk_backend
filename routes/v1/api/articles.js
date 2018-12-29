const express = require('express')
const router = express.Router()
const articleController = require('../../../controllers/articleController')
const authMiddleware = require('../auth/middleware')

let validateToken  = authMiddleware.checkIsLogged()

const { withError } = require('./helpers')

router.get('/', validateToken, withError(articleController.v1.list))
router.post('/findLike', validateToken, withError(articleController.v1.findLike))

module.exports = router
