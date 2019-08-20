'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Invoice = sequelize.define('Invoice', {
        voucher_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        issue_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        number_cae: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sale_point: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'invoice'
        })

    Invoice.associate = function (models) {
        Invoice.belongsTo(models.VoucherType)
        // Invoice.hasOne(models.PurchaseHeader)
    }

    Invoice.getMsgNotExists = function () {
        return 'Invalid Invoice'
    }

    return Invoice
}