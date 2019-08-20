'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Currency = sequelize.define('Currency', {
        value: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'currency'
        })

    Currency.associate = function (models) {

    }

    Currency.getMsgNotExists = function () {
        return 'Invalid Currency'
    }

    return Currency
}