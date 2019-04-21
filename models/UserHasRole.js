'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let UserHasRole = sequelize.define('UserHasRole', {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'user_has_role'
    })

  UserHasRole.associate = function (models) {
    UserHasRole.belongsTo(models.User)
    UserHasRole.belongsTo(models.Role)
  }

  UserHasRole.getMsgNotExists = function () {
    return 'Invalid UserHasRole'
  }

  return UserHasRole
}