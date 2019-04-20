'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let VoucherType = sequelize.define('VoucherType', {
    module_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numerator_code: {
      type: Sequelize.STRING(3),
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
      tableName: 'voucher_type'
    })

  VoucherType.associate = function (models) {
    
  }

  VoucherType.getMsgNotExists = function () {
    return 'Invalid VoucherType'
  }

  return VoucherType
}