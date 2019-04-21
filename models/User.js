'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  let User = sequelize.define('User', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    failed_attempts: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
      timestamps: true,
      underscored: true,
      tableName: 'user'
    })

  User.associate = function (models) {
    
  }

  User.getMsgNotExists = function () {
    return 'Invalid User'
  }

  return User
}