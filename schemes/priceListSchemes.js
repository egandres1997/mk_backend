'use-strict'

const scheme = require('../modules/scheme')

const priceListSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'name' },
        { key: 'from_date' },
        { key: 'to_date' },
        { key: 'created_at' }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = priceListSchemes