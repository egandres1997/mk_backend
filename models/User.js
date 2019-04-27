'use strict'

const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const moment = require('moment')

module.exports = function (sequelize) {
  let User = sequelize.define('User', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      isUnique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
        len: [
          1, 255
        ],
        isUnique: function (value, next) {
          var self = this
          User
            .find({
              where: {
                email: value
              }
            })
            .then(function (user) {
              if (user && self.id !== user.id) {
                return next('Email already in use')
              }
              return next()
            })
            .catch(function (err) {
              return next(err)
            })
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    failed_attempts: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'user'
    })

  User.associate = function (models) {
    User.hasMany(models.UserHasRole)
    User.belongsToMany(models.Role, {
      as: 'Roles',
      through: {
        model: models.UserHasRole
      },
      foreignKey: {
        name: 'user_id',
        allowNull: false,
        unique: true
      }
    })
  }

  User.getMsgNotExists = function () {
    return 'Invalid User'
  }

  User.prototype.verifyPassword = function (password) {
    return new Promise((resolve) => {
      bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
          return resolve(false)
        if (!isMatch)
          return resolve(false)
        resolve(true)
      })
    })
  }

  User.prototype.createToken = function () {
    return jwt.encode({
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      roles: this.Roles,
      iat: moment().unix(),
      exp: moment().add(30, 'days').unix()
    }, process.env.SECRET, 'HS256')
  }

  return User
}