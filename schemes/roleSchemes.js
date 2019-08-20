'use-strict'

const scheme = require('../modules/scheme')

const roleSchemes = schemes => {

    const basic = instance => scheme([
        { key: 'id' },
        { key: 'name' },
        { key: 'description' },
        { key: 'created_at' }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = roleSchemes