'use-strict'

const scheme = require('../modules/scheme')

const supplierSchemes = schemes => {
    
    const basic = instance => scheme([
        { key: 'id' },
        { key: 'business_name' },
        { key: 'name' },
        { key: 'cuit' },
        { key: 'iibb_number' },
        { key: 'address' },
        { key: 'phone' },
        { key: 'created_at' },
        { key: 'IvaCondition', scheme: schemes.ivaCondition.basic },
    ], instance)

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = supplierSchemes