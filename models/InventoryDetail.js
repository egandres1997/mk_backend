'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let InventoryDetail = sequelize.define('InventoryDetail', {
    inventory_header_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    article_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    unit_price: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    stk_measure_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'inventory_header'
    })

  InventoryDetail.associate = function (models) {
    
  }

  InventoryDetail.getMsgNotExists = function () {
    return 'Invalid InventoryDetail'
  }

  return InventoryDetail
}