'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let Measure = sequelize.define('Measure', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'measure'
    })

  Measure.associate = function (models) {
    
  }

  Measure.getMsgNotExists = function () {
    return 'Invalid Measure'
  }

  return Measure
}