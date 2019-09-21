'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Purchase = sequelize.define('Purchase', {
        supplier_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        stk_movement_header_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        invoice_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'purchase'
        })

    Purchase.associate = function (models) {
        Purchase.belongsTo(models.Supplier)
        Purchase.belongsTo(models.StkMovementHeader)
        Purchase.belongsTo(models.Invoice)
    }

    Purchase.getMsgNotExists = function () {
        return 'Invalid Purchase'
    }

    return Purchase
}