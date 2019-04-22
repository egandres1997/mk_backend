'use-strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
let resolvers = {}

fs
  .readdirSync('./graphql/resolvers')
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function (file) {
    if (file.slice(-3) !== '.js') return
    let _resolver = require('../graphql/resolvers/' + file)
    resolvers[file.slice(0, -3)] = _resolver
  })

module.exports = resolvers