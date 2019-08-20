'use-strict'

const scheme = require('../modules/scheme')

const taxSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'code' },
        { key: 'name' },
        { key: 'percentage' },
        { key: 'created_at' },
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = taxSchemes