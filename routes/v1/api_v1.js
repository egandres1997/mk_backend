let express = require('express')
let app = express()

let userAPI = require('./api/users')
let tokensAPI = require('./auth/tokens')

app.use('/api/users', userAPI)
app.use('/api/tokens', tokensAPI)

module.exports = app
