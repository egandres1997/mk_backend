'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let RoleHasPermission = sequelize.define('RoleHasPermission', {
        role_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        permission_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'role_has_permission'
        })

    RoleHasPermission.associate = function (models) {
        
    }

    RoleHasPermission.getMsgNotExists = function () {
        return 'Invalid RoleHasPermission'
    }

    return RoleHasPermission
}