'use-strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
const _ = require('../modules/_')
const repositories = require('../repositories')
const models = require('../models')
const schemes = require('../schemes')
const services = {}

fs
    .readdirSync('./services')
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename))
    .forEach(file => {
        if (file.slice(-3) !== '.js') return
        const __service = require('./' + file.slice(0, -3))
        const resourceService = _.splitCamelCase(file)
        resourceService.pop()
        const name = resourceService.map((word, idx) => !idx ? word.toLowerCase() : word).join('')
        let includes = {}
        try {
            includes = require('../includes/' + name + 'Includes')(models)
        } catch (e) {}
        let resourceSchemes = {}
        if (schemes[name]) {
            resourceSchemes = schemes[name]
        }
        services[name] = __service(services, repositories, includes, resourceSchemes)
    })

module.exports = services