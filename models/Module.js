'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let Module = sequelize.define('Module', {
    code: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'module'
    })

  Module.associate = function (models) {
    
  }

  Module.getMsgNotExists = function () {
    return 'Invalid Module'
  }

  return Module
}