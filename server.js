'use-strict'

const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const cors = require('cors')
const apiVersionV1 = require('./routes/v1/api_v1')
const bodyParser = require('body-parser')
const responser = require('./utils/responser')

const env = require('dotenv').config()
const config = require('./config/config')[process.env.NODE_ENV]
const port = config.port

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1', apiVersionV1)

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req
    .app
    .get('env') === 'development'
    ? err
    : {}
  res
    .status(err.status || 500)
    .send(responser.createResponse(err.status || 500, err.message, null))
})

server.listen(port, () => {
  console.log('Server listening on port ' + port)
})
