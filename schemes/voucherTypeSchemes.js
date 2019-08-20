'use-strict'

const scheme = require('../modules/scheme')

const voucherTypeSchemes = schemes => {

    const basic = instance => scheme([
        { key: 'id' },
        { key: 'code' },
        { key: 'name' },
        { key: 'status' },
        { key: 'Module', scheme: schemes.module.basic },
        { key: 'Numerator', scheme: schemes.numerator.basic },
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = voucherTypeSchemes