'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let PriceListHeader = sequelize.define('PriceListHeader', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        from_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        to_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'price_list_header'
        })

    PriceListHeader.associate = function (models) {
        PriceListHeader.hasMany(models.PriceListDetail)
    }

    PriceListHeader.getMsgNotExists = function () {
        return 'Invalid PriceListHeader'
    }

    return PriceListHeader
}