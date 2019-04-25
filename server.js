'use-strict'

const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (err, req, res) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {}
  res
    .status(err.status || 500)
    .send(responser.createResponse(err.status || 500, err.message, null))
})

app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
