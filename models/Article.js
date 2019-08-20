'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Article = sequelize.define('Article', {
        code: {
            type: Sequelize.STRING,
            allowNull: false,
            isUnique: true,
            validate: {
                isUnique: function (value, next) {
                    var self = this
                    Article
                        .find({
                            where: {
                                code: value
                            }
                        })
                        .then(function (article) {
                            if (article && self.id !== article.id) {
                                return next('Code already in use')
                            }
                            return next()
                        })
                        .catch(function (err) {
                            return next(err)
                        })
                }
            }
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
            allowNull: true,
        },
        sale_measure_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_list_header_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
        Article.belongsTo(models.Measure, {
            as: 'StkMeasure',
            foreignKey: {
                name: 'stk_measure_id',
                allowNull: false
            }
        })
        Article.belongsTo(models.Measure, {
            as: 'SaleMeasure',
            foreignKey: {
                name: 'sale_measure_id',
                allowNull: false
            }
        })
        Article.belongsTo(models.PriceListHeader)
        Article.belongsToMany(models.Category, {
            as: 'Categories',
            through: models.ArticleHasCategory,
            foreignKey: {
                name: 'article_id',
                allowNull: false
            }
        })
        Article.belongsToMany(models.Tax, {
            as: 'Taxes',
            through: models.ArticleHasTax,
            foreignKey: {
                name: 'article_id',
                allowNull: false
            }
        })
    }

    Article.getMsgNotExists = function () {
        return 'Invalid Article'
    }

    return Article
}