'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Supplier = sequelize.define('Supplier', {
        iva_condition_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        business_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cuit: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        iibb_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'supplier'
        })

    Supplier.associate = function (models) {

    }

    Supplier.getMsgNotExists = function () {
        return 'Invalid Supplier'
    }

    return Supplier
}