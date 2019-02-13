'use strict'
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const Article = sequelize.define('Article', {
    codigo_articulo: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    nombre_articulo: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    descripcion_articulo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    codigo_barra: {
      type: Sequelize.STRING(191),
      allowNull: true
    },
    id_unidad_medida_stk: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      unsigned: true
    },
    id_unidad_medida_ven: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      unsigned: true
    },
    id_lista_precios_cabecera: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      unsigned: true
    },
    status: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'stk_articulos',
    underscored: true
  })

  Article.associate = function (models) {
    Article.hasMany(models.ListaPreciosDetalle, {
      foreignKey: 'codigo_articulo',
      sourceKey: 'codigo_articulo'
    })
  }

  Article.getMsgNotExists = function () {
    return 'Artículo inexistente'
  }

  return Article
}
