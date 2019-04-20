'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let TaxType = sequelize.define('TaxType', {
    code: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    percentage: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'tax_type'
    })

  TaxType.associate = function (models) {
    
  }

  TaxType.getMsgNotExists = function () {
    return 'Invalid TaxType'
  }

  return TaxType
}