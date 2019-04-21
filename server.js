'use-strict'

const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const responser = require('./utils/responser')
const apiV0 = require('./routes/api_v0')
const port = process.env.PORT

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v0', apiV0)

app.get('/models', async function (req, res) {
  const models = require('./models')
  // const model = await models.User.findByPk(1, {
  //   include: [
  //     {
  //       model: models.Role,
  //       as: 'Roles',
  //       include: [{
  //         model: models.Module,
  //         as: 'Modules',
  //         include: [{
  //           model: models.Navigation,
  //           as: 'Navigations'
  //         }]
  //       }]
  //     }
  //   ]
  // })
  const model = await models.Article.findAll({
    include: [{
      model: models.Category,
      as: 'Categories'
    }]
  })
  res.send(model)
})

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
