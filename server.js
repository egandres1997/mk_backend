'use-strict'

const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const cors = require('cors')
const apiVersionV1 = require('./routes/v1/api_v1')
const config = require('./config')
const bodyParser = require('body-parser')
const port = config.port

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1', apiVersionV1)

const handleFatalError = (err) => {
  console.error('Fatal error' + err.message)
  console.error(err.stack)

  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandleRejection', handleFatalError)

server.listen(port, () => {
  console.log('Server listening on port ' + port)
})
