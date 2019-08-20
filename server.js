'use-strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiV0 = require('./routes/v0/api_v0')
const responser = require('./utils/responser')
const port = process.env.PORT

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept')
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/v0/api', apiV0)

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500).send(responser.createResponse(err.status || 500, err.message, null))
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})
