'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let SaleDetail = sequelize.define('SaleDetail', {
    sale_header_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    item_voucher_number: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    article_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    item_quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    item_price: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    item_supplier_price: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    item_discount: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    item_internal_taxes: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    item_iva: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    item_total: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'sale_detail'
    })

  SaleDetail.associate = function (models) {
    
  }

  SaleDetail.getMsgNotExists = function () {
    return 'Invalid SaleDetail'
  }

  return SaleDetail
}