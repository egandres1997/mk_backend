'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const RoleHasPermission = sequelize.define('RoleHasPermission', {
    role_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    permission_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'role_has_permissions',
    underscored: true
  })

  RoleHasPermission.associate = function (models) {
    RoleHasPermission.belongsTo(models.Role)
    RoleHasPermission.belongsTo(models.Permission)
  }

  RoleHasPermission.getMsgNotExists = function () {
    return 'Relación (Rol/Permiso) inexistente'
  }

  return RoleHasPermission
}
