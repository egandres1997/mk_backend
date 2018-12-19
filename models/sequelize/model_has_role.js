'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const ModelHasRole = sequelize.define('ModelHasRole', {
    role_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    model_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    model_type: {
      type: Sequelize.STRING(191),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'model_has_roles',
    underscored: true
  })

  ModelHasRole.associate = function (models) {
    ModelHasRole.belongsTo(models.User)
    ModelHasRole.belongsTo(models.Role)
  }

  ModelHasRole.getMsgNotExists = function () {
    return 'Relación (Usuario/Permiso) inexistente'
  }

  return ModelHasRole
}
