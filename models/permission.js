'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const Permission = sequelize.define('Permission', {
    name: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    module: {
      type: Sequelize.STRING(191),
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'permissions',
    underscored: true
  })

  Permission.associate = function (models) {
    Permission.belongsToMany(models.Role, {
      as: 'Roles',
      through: {
        model: models.RoleHasPermission
      },
      foreignKey: {
        name: 'permission_id',
        allowNull: false
      }
    })
  }

  Permission.getMsgNotExists = function () {
    return 'Permiso inexistente'
  }

  return Permission
}
