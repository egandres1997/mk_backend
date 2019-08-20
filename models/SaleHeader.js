'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let SaleHeader = sequelize.define('SaleHeader', {
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
        client_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        amount: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        discounts: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        exempt: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        iva: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        internal_taxes: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        total: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
        income_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        observations: {
            type: Sequelize.TEXT,
            allowNull: true
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'sale_header'
        })

    SaleHeader.associate = function (models) {

    }

    SaleHeader.getMsgNotExists = function () {
        return 'Invalid SaleHeader'
    }

    return SaleHeader
}