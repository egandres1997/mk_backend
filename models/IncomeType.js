'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let IncomeType = sequelize.define('IncomeType', {
        code: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'income_type'
        })

    IncomeType.associate = function (models) {

    }

    IncomeType.getMsgNotExists = function () {
        return 'Invalid IncomeType'
    }

    return IncomeType
}