'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const ListaPreciosCabecera = sequelize.define('ListaPreciosCabecera', {
    nombre_lista_precio: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    fecha_desde: {
      type: Sequelize.DATE,
      allowNull: false
    },
    fecha_hasta: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'vts_listas_precios_cabecera',
    underscored: true
  })

  ListaPreciosCabecera.associate = function (models) {
    //ListaPreciosCabecera.belongsTo(models.ListaPreciosDetalle)
  }

  ListaPreciosCabecera.getMsgNotExists = function () {
    return 'Cabecera de Lista de Precios inexistente'
  }

  return ListaPreciosCabecera
}
