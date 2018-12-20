const express = require('express')
const models = require('../../../models/sequelize')
const router = express.Router()
const jwt = require('jwt-simple')
const moment = require('moment')
const responser = require('../../../utils/responser')
const bcrypt = require('bcrypt')

const env = require('dotenv').config()
const config = require('../../../config')

const {
  check,
  validationResult
} = require('express-validator/check')


let createToken = (id, username, permissions, name) => {
  let payload = {
    user_id: id,
    username,
    permissions,
    name,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  }
  return jwt.encode(payload, config[process.env.NODE_ENV].secret)
}

let usuarios = []

router.post('/', [
  check('email')
    .exists().withMessage('email missing')
    .isEmail().withMessage('must be an email')
    .trim(),
  check('password')
    .exists().withMessage('Password missing')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.mapped()
    })
  }

  let email = req.body.email
  let password = req.body.password
  models.User.findOne({

    where: {
      email: email
    },
    include: [{
      model: models.Role,
      as: 'Roles',
      include: [{
        model: models.Permission,
        as: 'Permissions'
      }]
    }
    ]

  }).then(oneUser => {
    if (oneUser === null) {
      return res.status(responser.codes.UNPROCESSABLE_ENTITY).json(
        responser.createResponse(responser.codes.UNPROCESSABLE_ENTITY, 'Invalid email or password', null)
      )
    }
    let permissions = oneUser.getPermissions()
    oneUser.verifyPassword(password).then(() => {
      let token = createToken(oneUser.id, email, permissions, oneUser.name)
      if (usuarios.indexOf(req.body.email) === -1) {
        usuarios.push(token)
      }
      res.statusCode = responser.codes.OK
      res.json(responser.createSuccessResponse(res.statusCode, {
        token: token,
        email: email,
        permissions: permissions,
        name: oneUser.name,
        id: oneUser.id
      }))
    }).catch(function () {
      return res.status(responser.codes.UNPROCESSABLE_ENTITY).json(
        responser.createResponse(responser.codes.UNPROCESSABLE_ENTITY, 'Invalid email or password', null)
      )
    })
  })
})

module.exports = router