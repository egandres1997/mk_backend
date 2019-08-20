'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let InventoryHeader = sequelize.define('InventoryHeader', {
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'inventory_header'
        })

    InventoryHeader.associate = function (models) {

    }

    InventoryHeader.getMsgNotExists = function () {
        return 'Invalid InventoryHeader'
    }

    return InventoryHeader
}