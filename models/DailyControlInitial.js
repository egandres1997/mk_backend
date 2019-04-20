'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let DailyControlInitial = sequelize.define('DailyControlInitial', {
    daily_control_header_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    currency_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total_amount: {
      type: Sequelize.FLOAT(10,2),
      allowNull: false
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'daily_control_initial'
    })

  DailyControlInitial.associate = function (models) {
    
  }

  DailyControlInitial.getMsgNotExists = function () {
    return 'Invalid DailyControlInitial'
  }

  return DailyControlInitial
}