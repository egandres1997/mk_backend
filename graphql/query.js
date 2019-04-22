'use strict'

// QUERY

module.exports = function (_) {
  return {
    users: _.userResolver.findAll
  }
}