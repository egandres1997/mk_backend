'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Tax = sequelize.define('Tax', {
        code: {
            type: Sequelize.STRING(3),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        percentage: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'tax'
        })

    Tax.associate = function (models) {
        Tax.belongsToMany(models.Article, {
            as: 'Articles',
            through: models.ArticleHasTax,
            foreignKey: {
                name: 'tax_id',
                allowNull: false
            }
        })
    }

    Tax.getMsgNotExists = function () {
        return 'Invalid Tax'
    }

    return Tax
}