'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let Client = sequelize.define('Client', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    document: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    iva_condition_code: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'client'
    })

  Client.associate = function (models) {
    
  }

  Client.getMsgNotExists = function () {
    return 'Invalid Client'
  }

  return Client
}