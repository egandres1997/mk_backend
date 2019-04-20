'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let Navigation = sequelize.define('Navigation', {
    module_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    parent_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    route: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "#"
    },
    icon: {
      type: Sequelize.STRING,
      allowNull: true
    },
    order: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'navigation'
    })

  Navigation.associate = function (models) {
    
  }

  Navigation.getMsgNotExists = function () {
    return 'Invalid Navigation'
  }

  return Navigation
}