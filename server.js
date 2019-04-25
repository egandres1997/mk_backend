'use-strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./app/Resolvers')
const port = process.env.PORT

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept')
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const typeDefs = readFileSync(
  join(__dirname, 'app', 'Schema.gql'),
  'utf-8'
)

const apollo = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    const token = req.header('authorization')
    return true
  }  
})

apollo.applyMiddleware({ app })

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {}
  res
    .status(err.status || 500)
    .send(responser.createResponse(err.status || 500, err.message,null))
})

app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
