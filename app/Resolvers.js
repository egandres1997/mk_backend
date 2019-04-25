'use strict'

const queries = require('./Queries')
const mutations = require('./Mutations')
const types = require('./Types')

module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types
}