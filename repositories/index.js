'use-strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
const models = require('../models')
const _ = require('../modules/_')
const repositories = {}

fs
    .readdirSync('./repositories')
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename))
    .forEach(file => {
        if (file.slice(-3) !== '.js') return
        const __repository = require('./' + file.slice(0, -3))
        const resourceRepository = _.splitCamelCase(file)
        resourceRepository.pop()
        const modelName = resourceRepository.join('')
        const resourceName = resourceRepository.map((word, idx) => !idx ? word.toLowerCase() : word).join('')
        const resourceModel = models[modelName]
        repositories[resourceName] = new __repository(resourceModel)
    })

module.exports = repositories