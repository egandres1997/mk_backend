'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let PurchaseDetail = sequelize.define('PurchaseDetail', {
        purchase_header_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        article_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        supplier_price: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        stk_measure_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'purchase_detail'
        })

    PurchaseDetail.associate = function (models) {
        PurchaseDetail.belongsTo(models.PurchaseHeader)
        PurchaseDetail.belongsTo(models.Article)
        PurchaseDetail.belongsTo(models.Measure, {
            as: 'StkMeasure'
        })
    }

    PurchaseDetail.getMsgNotExists = function () {
        return 'Invalid PurchaseDetail'
    }

    return PurchaseDetail
}