'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Numerator = sequelize.define('Numerator', {
        code: {
            type: Sequelize.STRING(3),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        index: {
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
            tableName: 'numerator'
        })

    Numerator.associate = function (models) {

    }

    Numerator.getMsgNotExists = function () {
        return 'Invalid Numerator'
    }

    return Numerator
}