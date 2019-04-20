'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let Role = sequelize.define('Role', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'role'
    })

  Role.associate = function (models) {
    
  }

  Role.getMsgNotExists = function () {
    return 'Invalid Role'
  }

  return Role
}