'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const ListaPreciosDetalle = sequelize.define('ListaPreciosDetalle', {
    id_lista_precios_cabecera: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      unsigned: true
    },
    codigo_articulo: {
      type: Sequelize.STRING(191),
      allowNull: false,
      references: {
        model: 'Article',
        key: 'codigo_articulo' 
      }
    },
    precio_proveedor: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      unsigned: true
    },
    precio_de_venta: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      unsigned: true
    }
  }, {
    timestamps: true,
    tableName: 'vts_listas_precio_detalle',
    underscored: true
  })

  ListaPreciosDetalle.associate = function (models) {
    ListaPreciosDetalle.hasMany(models.Article, {
      foreignKey: 'id',
      targetKey: 'codigo_articulo',
    })
  }

  ListaPreciosDetalle.getMsgNotExists = function () {
    return 'Detalle de Lista de Precios inexistente'
  }

  return ListaPreciosDetalle
}
