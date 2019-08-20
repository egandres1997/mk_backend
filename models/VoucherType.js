'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let VoucherType = sequelize.define('VoucherType', {
        code: {
            type: Sequelize.STRING(3),
            allowNull: false,
        },
        module_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        numerator_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'voucher_type'
        })

    VoucherType.associate = function (models) {
        VoucherType.belongsTo(models.Module)
        VoucherType.belongsTo(models.Numerator)
    }

    VoucherType.getMsgNotExists = function () {
        return 'Invalid VoucherType'
    }

    return VoucherType
}