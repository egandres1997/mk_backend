'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let StkMovementDetail = sequelize.define('StkMovementDetail', {
        stk_movement_header_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        movement_voucher_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        article_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        unit_price: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        measure_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'stk_movement_detail'
        })

    StkMovementDetail.associate = function (models) {

    }

    StkMovementDetail.getMsgNotExists = function () {
        return 'Invalid StkMovementDetail'
    }

    return StkMovementDetail
}