'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let RoleHasModule = sequelize.define('RoleHasModule', {
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    module_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'role_has_module'
    })

  RoleHasModule.associate = function (models) {
    RoleHasModule.belongsTo(models.Role)
    RoleHasModule.belongsTo(models.Module)
  }

  RoleHasModule.getMsgNotExists = function () {
    return 'Invalid RoleHasModule'
  }

  return RoleHasModule
}