'use-strict'

const scheme = require('../modules/scheme')

const moduleSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'code' },
        { key: 'name' },
        { key: 'description' },
        { key: 'status' },
        { key: 'created_at' }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = moduleSchemes