'use strict'

module.exports = (services) => {
  this.getAllUsers = () => {
    return services.userService.findAll()
  }

  return this
}