'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let InventoryDetail = sequelize.define('InventoryDetail', {
        inventory_header_id: {
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
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        stk_measure_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'inventory_detail'
        })

    InventoryDetail.associate = function (models) {

    }

    InventoryDetail.getMsgNotExists = function () {
        return 'Invalid InventoryDetail'
    }

    return InventoryDetail
}