'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let MeasureConvertion = sequelize.define('MeasureConvertion', {
        "1_measure_id": {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'measure',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        "2_measure_id": {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'measure',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        convertion: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'measure_convertion'
        })

    MeasureConvertion.associate = function (models) {

    }

    MeasureConvertion.getMsgNotExists = function () {
        return 'Invalid MeasureConvertion'
    }

    return MeasureConvertion
}