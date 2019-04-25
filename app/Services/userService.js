'use-strict'

module.exports = function (models, serviceProvider) {
  const findAll = async (query) => {
    return await models.User.findAll()
  }

  return {
    findAll
  }
}