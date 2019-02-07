'use strict'
const Op = require('sequelize').Op
const sequelize = require('sequelize')
const errorGetter = require('../utils/errors')

module.exports = (models) => {
  return {
    findAll: () => {
    	return new Promise((resolve, reject) => {
    		models.User.findAll({
    			include: [
				    {
        	            model: models.Role,
        	            include: [
        	            	{
        	            		model: models.Permission,
        	            		as: 'Permissions'
        	            	}
        	            ]
                    }
    			]
    		})
			.then(users => {
				if (!users.length) {
					reject(errorGetter.getServiceErrorNotFound(models.User.getMsgNotExists()))
				}
				resolve(users)
			})
			.catch(err => reject(errorGetter.getServiceError()))
    	})
    }
  }
}
