'use-strict'

const purchaseIncludes = models => {

    const basic = () => ([{
        model: models.Invoice
    }, {
        model: models.StkMovementHeader
    }, {
        model: models.Supplier
    }])

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = purchaseIncludes