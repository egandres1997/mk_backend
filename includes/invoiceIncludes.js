'use-strict'

const invoiceIncludes = models => {

    const basic = () => ([{
        model: models.VoucherType
    }])

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = invoiceIncludes