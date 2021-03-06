'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let PriceListDetail = sequelize.define('PriceListDetail', {
        price_list_header_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        article_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        supplier_price: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        sale_price: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'price_list_detail'
        })

    PriceListDetail.associate = function (models) {
        PriceListDetail.belongsTo(models.PriceListHeader)
    }

    PriceListDetail.getMsgNotExists = function () {
        return 'Invalid PriceListDetail'
    }

    return PriceListDetail
}