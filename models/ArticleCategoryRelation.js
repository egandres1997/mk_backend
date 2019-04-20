'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let ArticleCategoryRelation = sequelize.define('ArticleCategoryRelation', {
    article_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    category_code: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'article_category_relation'
    })

  ArticleCategoryRelation.associate = function (models) {
    
  }

  ArticleCategoryRelation.getMsgNotExists = function () {
    return 'Invalid ArticleCategoryRelation'
  }

  return ArticleCategoryRelation
}