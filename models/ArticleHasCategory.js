'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let ArticleHasCategory = sequelize.define('ArticleHasCategory', {
        article_id: {
            type: Sequelize.STRING(3),
            allowNull: false,
        },
        category_id: {
            type: Sequelize.STRING(3),
            allowNull: false,
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'article_has_category'
        })

    ArticleHasCategory.associate = function (models) {
        ArticleHasCategory.belongsTo(models.Article)
        ArticleHasCategory.belongsTo(models.Category)
    }

    ArticleHasCategory.getMsgNotExists = function () {
        return 'Invalid ArticleHasCategory'
    }

    return ArticleHasCategory
}