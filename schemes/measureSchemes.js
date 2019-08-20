'use-strict'

const scheme = require('../modules/scheme')

const measureSchemes = schemes => {

    const basic = instance => scheme([
        { key: 'id' },
        { key: 'name' },
        { key: 'description' },
        { key: 'quantity' },
        { key: 'created_at' }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = measureSchemes