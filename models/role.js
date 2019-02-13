'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const Role = sequelize.define('Role', {
    name: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    guard_name: {
      type: Sequelize.STRING(191),
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'roles',
    underscored: true
  })

  Role.associate = function (models) {
    Role.belongsToMany(models.User, {
      through: {
        model: models.ModelHasRole
      },
      foreignKey: {
        name: 'role_id',
        allowNull: false
      }
    })
    Role.belongsToMany(models.Permission, {
      as: 'Permissions',
      through: {
        model: models.RoleHasPermission
      },
      foreignKey: {
        name: 'role_id',
        allowNull: false
      }
    })
  }

  Role.getMsgNotExists = function () {
    return 'Rol inexistente'
  }

  return Role
}
