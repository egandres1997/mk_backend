'use-strict'

const scheme = require('../modules/scheme')

const articleSchemes = schemes => {

    const basic = instance => scheme([
        { key: 'id' },
        { key: 'code' },
        { key: 'name' },
        { key: 'description' },
        { key: 'barcode' },
        { key: 'status' },
        { key: 'created_at' },
        { key: 'SaleMeasure', scheme: schemes.measure.basic },
        { key: 'Categories', scheme: schemes.category.basic },
        { key: 'Taxes', scheme: schemes.tax.basic }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = articleSchemes