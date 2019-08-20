'use-strict'

const errors = require('../utils/errors')
const _ = require('../modules/_')

const purchaseDetailService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const updatePurchaseDetailsFromHeader = async (
        purchaseHeaderId,
        newPurchaseDetails,
        options
    ) => {
        const purchaseDetails = await repositories.purchaseDetail.get({
            where: {
                purchase_header_id: purchaseHeaderId
            }
        })
        console.log(purchaseDetails)
        for (const purchaseDetail of purchaseDetails) {
            const detail = newPurchaseDetails.find(detail => (
                detail.article_id === purchaseDetail.article_id
            ))
            if (detail) {
                await purchaseDetail.update(detail, options)
            } else {
                await purchaseDetail.destroy(options)
            }
        }
        for (const purchaseDetail of newPurchaseDetails) {
            const detail = purchaseDetails.find(detail => (
                detail.article_id === purchaseDetail.article_id
            ))
            if (!detail) {
                await repositories.purchaseDetail.create({
                    purchase_header_id: purchaseHeaderId,
                    ...purchaseDetail
                }, options)
            }
        }
    }

    return {
        updatePurchaseDetailsFromHeader
    }
}

module.exports = purchaseDetailService