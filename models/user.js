'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const User = sequelize.define('User', {
    name: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(191),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    remember_token: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'users',
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['email']
      }
    ]
  })

  User.associate = function (models) {
    User.belongsToMany(models.Role, {
      through: {
        model: models.ModelHasRole
      },
      foreignKey: {
        name: 'model_id',
        allowNull: false
      }
    })
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
    const current_password = this.password
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, current_password, (err, isMatch) => {
        if (err) { return reject(err) }
        if (!isMatch) { return reject(new Error('Password error')) }
        resolve()
      })
    })
  }

  User.prototype.getPermissions = function () {
    let permissions = []
    for (const role of this.Roles) {
      for (const permission of role.Permissions) {
        permissions.push({ name: permission.name, module: permission.module })
      }
    }
    return permissions
  }

  User.getMsgNotExists = function () {
    return 'Usuario inexistente'
  }

  return User
}
