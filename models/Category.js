'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let Category = sequelize.define('Category', {
    code: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    parent_code: {
      type: Sequelize.STRING(3),
      allowNull: true,
      defaultValue: null
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'category'
    })

  Category.associate = function (models) {
    
  }

  Category.getMsgNotExists = function () {
    return 'Invalid Category'
  }

  return Category
}