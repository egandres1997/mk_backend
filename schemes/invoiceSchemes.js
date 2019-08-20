'use-strict'

const scheme = require('../modules/scheme')

const invoiceSchemes = schemes => {

    const basic = instance => scheme([
        { key: 'id' },
        { key: 'issue_date' },
        { key: 'number_cae' },
        { key: 'number' },
        { key: 'sale_point' },
        { key: 'status' },
        { key: 'created_at' },
        { key: 'VoucherType', scheme: schemes.voucherType.basic }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = invoiceSchemes