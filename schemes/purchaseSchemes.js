'use-strict'

const scheme = require('../modules/scheme')

const purchaseSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'created_at' },
        { key: 'Supplier', scheme: schemes.supplier.basic },
        { key: 'StkMovementHeader', scheme: schemes.stkMovementHeader.basic },
        { key: 'Invoice', scheme: schemes.invoice.basic },
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = purchaseSchemes