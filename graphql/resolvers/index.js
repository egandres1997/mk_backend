'use strict'

// RESOLVERS

const resolverProvider = require('../../providers/resolverProvider')

module.exports = {
  Query: require('../query')(resolverProvider), 
  Mutation: require('../mutation')(resolverProvider)
}