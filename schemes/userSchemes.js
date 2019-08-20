'use-strict'

const scheme = require('../modules/scheme')

const userSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'name' },
        { key: 'surname' },
        { key: 'email' },
        { key: 'status' },
        { key: 'created_at' },
        { key: 'Roles', scheme: schemes.role.basic },
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = userSchemes