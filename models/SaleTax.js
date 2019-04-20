'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let SaleTax = sequelize.define('SaleTax', {
    tax_type_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    voucher_type_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    sale_header_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sale_detail_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tax_amount: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'sale_tax'
    })

  SaleTax.associate = function (models) {
    
  }

  SaleTax.getMsgNotExists = function () {
    return 'Invalid SaleTax'
  }

  return SaleTax
}