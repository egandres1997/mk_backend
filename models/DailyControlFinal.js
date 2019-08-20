'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let DailyControlFinal = sequelize.define('DailyControlFinal', {
        daily_control_header_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        currency_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        total_amount: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'daily_control_final'
        })

    DailyControlFinal.associate = function (models) {

    }

    DailyControlFinal.getMsgNotExists = function () {
        return 'Invalid DailyControlFinal'
    }

    return DailyControlFinal
}