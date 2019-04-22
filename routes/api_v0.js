'use-strict'

const express = require('express')
const app = express()
const { graphqlServer, graphiql } = require('../graphql')

app.use('/api/graphql', graphqlServer())
app.use('/api/graphiql', graphiql('/v0/api/graphql'))

module.exports = app