'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let IvaCondition = sequelize.define('IvaCondition', {
    code: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'iva_condition'
    })

  IvaCondition.associate = function (models) {
    
  }

  IvaCondition.getMsgNotExists = function () {
    return 'Invalid IvaCondition'
  }

  return IvaCondition
}