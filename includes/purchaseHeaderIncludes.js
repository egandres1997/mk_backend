'use-strict'

const purchaseIncludes = models => {

    const basic = () => ([{
        model: models.PurchaseDetail
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