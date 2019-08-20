'use-strict'

const scheme = require('../modules/scheme')

const categorySchemes = schemes => {

    const basic = instance => scheme([
        { key: 'id' },
        { key: 'code' },
        { key: 'name' },
        { key: 'description' },
        { key: 'parent_id' },
        { key: 'status' },
        { key: 'created_at' }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = categorySchemes