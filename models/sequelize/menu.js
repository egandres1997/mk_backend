'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const Menu = sequelize.define('Menu', {
    nombre_menu: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    nombre_ruta: {
      type: Sequelize.STRING(191),
      allowNull: true
    },
    icono: {
      type: Sequelize.STRING(191),
      allowNull: true
    },
    id_padre: {
      type: Sequelize.INTEGER(10),
      allowNull: true,
      unsigned: true
    },
    orden: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      unsigned: true
    },
    visible: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
      defaultValue: 1
    }
  }, {
    timestamps: true,
    tableName: 'gen_menues',
    underscored: true
  })

  Menu.associate = function (models) {

  }

  Menu.getMsgNotExists = function () {
    return 'Menu inexistente'
  }

  return Menu
}
