'use strict'
var bcrypt = require('bcrypt')
var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var User = sequelize.define('User', {
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
    fullname: Sequelize.STRING,
    password: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'user',
    indexes: [
      {
        unique: true,
        fields: ['email']
      }
    ]
  })

  // Adding a class level method
  User.associate = function (models) {
    // User.belongsToMany(models.Role, {
    //   as: 'Roles',
    //   through: {
    //     model: models.UserRole
    //   },
    //   foreignKey: {
    //     name: 'user_id',
    //     allowNull: true,
    //     unique: true
    //   }
    // })

    // User.belongsToMany(models.Course, {
    //   as: 'Teaches',
    //   through: {
    //     model: models.CourseTeacher
    //   },
    //   foreignKey: {
    //     name: 'user_id',
    //     allowNull: true,
    //     unique: true
    //   }
    // })
    // User.hasMany(models.Enrolment)
  }

  User.beforeCreate((user, options) => {
    return bcrypt
      .hash(user.password, bcrypt.genSaltSync(10))
      .then(hashedPw => {
        user.password = hashedPw
      })
  })

  User.beforeUpdate((user, options) => {
    return bcrypt
      .hash(user.password, bcrypt.genSaltSync(10))
      .then(hashedPw => {
        user.password = hashedPw
      })
  })

  User.prototype.verifyPassword = function (password) {
    var current_password = this.password
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, current_password, (err, isMatch) => {
        if (err) 
          return reject(err)
        if (!isMatch) 
          return reject(new Error('Password error'))
        resolve()
      })
    })
  }

  User.prototype.getPermissions = function () {
    let permissions = []
    for (const role of this.Roles) {
      for (const permission of role.Permissions) {
        permissions.push(permission.name)
      }
    }
    return permissions
  }

  User.getMsgNotExists = function () {
    return 'Usuario inexistente'
  }

  return User
}
