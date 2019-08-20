'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Category = sequelize.define('Category', {
        code: {
            type: Sequelize.STRING(3),
            allowNull: false,
            isUnique: true,
            validate: {
                isUnique: function (value, next) {
                    var self = this
                    Category
                        .find({
                            where: {
                                code: value
                            }
                        })
                        .then(function (category) {
                            if (category && self.id !== category.id) {
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
        parent_id: {
            type: Sequelize.INTEGER,
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
        Category.belongsTo(models.Category, {
            as: 'Parent',
            foreignKey: {
                name: 'parent_id',
                allowNull: true
            }
        })
        Category.belongsToMany(models.Article, {
            as: 'Articles',
            through: models.ArticleHasCategory,
            foreignKey: {
                name: 'category_id',
                allowNull: false
            }
        })
    }

    Category.getMsgNotExists = function () {
        return 'Invalid Category'
    }

    return Category
}