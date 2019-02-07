'use strict'
const Op = require('sequelize').Op
const sequelize = require('sequelize')
const errorGetter = require('../utils/errors')

module.exports = (models) => {
  return {
    findAll: () => {
    	return new Promise((resolve, reject) => {
    		models.Article.findAll()
    			.then(articles => {
    				if (!articles.length) {
    					reject(errorGetter.getServiceErrorNotFound(models.Article.getMsgNotExists()))
    				}
    				resolve(articles)
    			})
    			.catch(err => reject(errorGetter.getServiceError()))
    	})
    },
    findLike: (like) => {
        return new Promise((resolve, reject) => {
            models.Article.findAll({
                where: {
                    [models.Sequelize.Op.or]: {
                        nombre_articulo: {
                            [models.Sequelize.Op.like]: `%${like}%`
                        },
                        descripcion_articulo: {
                            [models.Sequelize.Op.like]: `%${like}%`
                        }
                    }
                },
                include: [
                    {
                        model: models.ListaPreciosDetalle
                    }
                ]
            })
            .then(articles => {
                /*console.log({articles})*/
                if (!articles.length) {
                    reject([])
                }
                resolve(articles)
            })
            .catch(err => console.log(err.message))
        })
    }
  }
}
