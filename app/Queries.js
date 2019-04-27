'use strict'

module.exports = (services) => {
  this.getUsers = (_, { filters, options }) => {
    return services.UserService.findAll(filters, options)
  }

  return this
}