'use-strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
const _ = require('../modules/_')
const schemes = {}

fs
    .readdirSync('./schemes')
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename))
    .forEach(file => {
        if (file.slice(-3) !== '.js') return
        const __scheme = require('./' + file.slice(0, -3))
        let resourceScheme = _.splitCamelCase(file)
        resourceScheme.pop()
        resourceScheme = resourceScheme.map((word, idx) => (
            !idx ? word.toLocaleLowerCase() : word
        ))
        const name = resourceScheme.join('')
        schemes[name] = __scheme(schemes)
    })

module.exports = schemes