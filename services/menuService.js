'use strict'
const Op = require('sequelize').Op
const sequelize = require('sequelize')
const errorGetter = require('../utils/errors')

module.exports = (models) => {
  return {
    findAll: () => {
    	return new Promise((resolve, reject) => {
    		models.Menu.findAll({
                where: { visible: 1 },
                order: [
                    ['orden','ASC']
                ]
            })
    			.then(menus => {
    				if (!menus.length) {
    					reject(errorGetter.getServiceErrorNotFound(models.Menu.getMsgNotExists()))
    				}
    				resolve(menus)
    			})
    			.catch(err => reject(errorGetter.getServiceError()))
    	})
    }
  }
}
