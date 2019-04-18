'use-strict'

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./resolvers')

const typeDefs = readFileSync(
  join(__dirname, 'schema.gql'),
  'utf-8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = {
  graphqlServer: () => graphqlExpress({ schema }),
  graphiql: (endpointURL) => graphiqlExpress({ endpointURL })
}