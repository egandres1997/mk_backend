'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let StkMovementHeader = sequelize.define('StkMovementHeader', {
        voucher_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        voucher_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        voucher_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        stk_movement_type: {
            type: Sequelize.ENUM('E', 'S'),
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'stk_movement_header'
        })

    StkMovementHeader.associate = function (models) {
        StkMovementHeader.hasMany(models.PurchaseHeader)
    }

    StkMovementHeader.getMsgNotExists = function () {
        return 'Invalid StkMovementHeader'
    }

    return StkMovementHeader
}