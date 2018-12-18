let express = require('express')
let app = express()

let userAPI = require('./api/users')

app.use('/api/users', userAPI)

module.exports = app
