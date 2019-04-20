'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let Article = sequelize.define('Article', {
    code: {
      type: Sequelize.STRING,
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
    barcode: {
      type: Sequelize.STRING,
      allowNull: true
    },
    stk_measure_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sale_measure_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    price_list_header_id: {
      type: Sequelize.INTEGER,
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
      tableName: 'article'
    })

  Article.associate = function (models) {
    
  }

  Article.getMsgNotExists = function () {
    return 'Invalid Article'
  }

  return Article
}