'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let ArticleTax = sequelize.define('ArticleTax', {
    article_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    tax_type_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'article_tax'
    })

  ArticleTax.associate = function (models) {
    
  }

  ArticleTax.getMsgNotExists = function () {
    return 'Invalid ArticleTax'
  }

  return ArticleTax
}