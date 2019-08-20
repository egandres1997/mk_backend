'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    let Role = sequelize.define('Role', {
        name: {
            type: Sequelize.STRING,
            isUnique: true,
            validate: {
                isUnique: function (value, next) {
                    var self = this
                    Role
                        .find({
                            where: {
                                name: value
                            }
                        })
                        .then(function (role) {
                            // reject if a different user wants to use the same email
                            if (role && self.id !== role.id) {
                                return next('Role name already in use')
                            }
                            return next()
                        })
                        .catch(function (err) {
                            return next(err)
                        })
                }
            }
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'role'
        })

    Role.associate = function (models) {
        Role.hasMany(models.UserHasRole)
        Role.hasMany(models.RoleHasModule)
        Role.belongsToMany(models.User, {
            as: 'Users',
            through: {
                model: models.UserHasRole
            },
            foreignKey: {
                name: 'role_id',
                allowNull: false,
                unique: true
            }
        })
        Role.belongsToMany(models.Module, {
            as: 'Modules',
            through: {
                model: models.RoleHasModule
            },
            foreignKey: {
                name: 'role_id',
                allowNull: false,
                unique: true
            }
        })
    }

    Role.getMsgNotExists = function () {
        return 'Invalid Role'
    }

    return Role
}