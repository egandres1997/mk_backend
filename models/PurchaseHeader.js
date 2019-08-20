'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let PurchaseHeader = sequelize.define('PurchaseHeader', {
        supplier_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        stk_movement_header_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'purchase_header'
        })

    PurchaseHeader.associate = function (models) {
        PurchaseHeader.hasMany(models.PurchaseDetail)
        PurchaseHeader.belongsTo(models.Supplier)
        PurchaseHeader.belongsTo(models.StkMovementHeader)
    }

    PurchaseHeader.getMsgNotExists = function () {
        return 'Invalid PurchaseHeader'
    }

    return PurchaseHeader
}