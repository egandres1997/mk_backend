'use-strict'

const responser = require('../../utils/responser')
const { isUndefined, errorHandler } = require('../../utils/functions')

module.exports = function (models, services) {
  this.findAll = async (filters, options) => {
    return await models.User.findAll({
      where: filters
    })
  }

  this.authenticate = async (req) => {
    try {
      if (isUndefined(req.email) || isUndefined(req.password)) {
        throw responser.createResponse(
          responser.codes.BAD_REQUEST, 'Usuario y password requeridos'
        )
      }
      const user = await models.User.findOne({
        where: { email: req.email },
        include: [{
          model: models.Role,
          as: 'Roles',
          required: true,
          include: [{
            model: models.Module,
            as: 'Modules',
            required: true,
            include: [{
              model: models.Navigation,
              as: 'Navigations',
              required: true
            }]
          }]
        }]
      })
      if (!user) {
        throw responser.createResponse(
          responser.codes.UNPROCESSABLE_ENTITY, 'Usuario incorrecto'
        )
      }
      const verification = await user.verifyPassword(req.password)
      if (!verification) {
        throw responser.createResponse(
          responser.codes.UNPROCESSABLE_ENTITY, 'Password incorrecta'
        )
      }
      return {
        token: user.createToken(),
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        roles: user.Roles
      }
    } catch (err) { throw errorHandler(err) }
  }

  return this
}