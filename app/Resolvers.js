'use strict'

const queries = require('./Queries')
const mutations = require('./Mutations')
const types = require('./Types')
const serviceProvider = require('../providers/serviceProvider')

module.exports = {
  Query: queries(serviceProvider),
  Mutation: mutations(serviceProvider),
  ...types(serviceProvider)
}