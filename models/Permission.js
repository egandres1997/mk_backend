'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Permission = sequelize.define('Permission', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'permission'
        })

    Permission.associate = function (models) {
        
    }

    Permission.getMsgNotExists = function () {
        return 'Invalid Permission'
    }

    return Permission
}