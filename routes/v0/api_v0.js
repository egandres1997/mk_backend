'use-strict'

const express = require('express')
const app = express()

const authAPI = require('./endpoints/auth')
const userAPI = require('./endpoints/users')
const categoryAPI = require('./endpoints/categories')
const measureAPI = require('./endpoints/measures')
const taxAPI = require('./endpoints/taxes')
const articleAPI = require('./endpoints/articles')
const purchaseAPI = require('./endpoints/purchases')

app.use('/auth', authAPI)
app.use('/users', userAPI)
app.use('/categories', categoryAPI)
app.use('/measures', measureAPI)
app.use('/taxes', taxAPI)
app.use('/articles', articleAPI)
app.use('/purchases', purchaseAPI)

module.exports = app