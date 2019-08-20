'use-strict'

const scheme = require('../modules/scheme')

const stkMovementHeaderSchemes = schemes => {

    const basic = instance => scheme([
        { key: 'id' },
        { key: 'voucher_number' },
        { key: 'voucher_date' },
        { key: 'stk_movement_type' },
        { key: 'created_at' },
        { key: 'VoucherType', scheme: schemes.voucherType.basic }
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = stkMovementHeaderSchemes