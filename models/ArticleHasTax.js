'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let ArticleHasTax = sequelize.define('ArticleHasTax', {
        article_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        tax_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'article_has_tax'
        })

    ArticleHasTax.associate = function (models) {
        ArticleHasTax.belongsTo(models.Article)
        ArticleHasTax.belongsTo(models.Tax)
    }

    ArticleHasTax.getMsgNotExists = function () {
        return 'Invalid ArticleHasTax'
    }

    return ArticleHasTax
}