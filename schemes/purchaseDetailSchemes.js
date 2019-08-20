'use-strict'

const scheme = require('../modules/scheme')

const purchaseDetailSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'quantity' },
        { key: 'supplier_price' },
        { key: 'created_at' },
        { key: 'PurchaseHeader', scheme: schemes.purchaseHeader.basic },
        { key: 'Article', scheme: schemes.article.basic },
        { key: 'StkMeasure', scheme: schemes.measure.basic },
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = purchaseDetailSchemes