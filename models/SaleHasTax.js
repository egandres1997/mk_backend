'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let SaleHasTax = sequelize.define('SaleHasTax', {
        tax_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        voucher_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        sale_header_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        sale_detail_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        tax_amount: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'sale_has_tax'
        })

    SaleHasTax.associate = function (models) {

    }

    SaleHasTax.getMsgNotExists = function () {
        return 'Invalid SaleHasTax'
    }

    return SaleHasTax
}