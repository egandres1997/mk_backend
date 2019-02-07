let express = require('express')
let app = express()

let userAPI = require('./api/users')
let tokensAPI = require('./auth/tokens')
let menuAPI = require('./api/menus')
let articleAPI = require('./api/articles')

app.use('/api/users', userAPI)
app.use('/api/tokens', tokensAPI)
app.use('/api/menus', menuAPI)
app.use('/api/articles', articleAPI)

module.exports = app
