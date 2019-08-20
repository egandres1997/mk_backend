'use-strict'

const scheme = require('../modules/scheme')

const numeratorSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'code' },
        { key: 'name' },
        { key: 'index' },
        { key: 'status' },
        { key: 'created_at' },
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = numeratorSchemes