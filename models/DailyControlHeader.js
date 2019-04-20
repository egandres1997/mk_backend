'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let DailyControlHeader = sequelize.define('DailyControlHeader', {
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    initial_amount: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    sales_amount: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    expenses_amount: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
    total_amount: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'daily_control_header'
    })

  DailyControlHeader.associate = function (models) {
    
  }

  DailyControlHeader.getMsgNotExists = function () {
    return 'Invalid DailyControlHeader'
  }

  return DailyControlHeader
}