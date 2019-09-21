'use-strict'

const errors = require('../utils/errors')
const _ = require('../modules/_')
const stkMovementType = require('../constants/stkMovementType')

const purchaseService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.purchase.finder({
        ...options,
        include: includes.basic()
    })

    const create = async purchase => {
        // crear invoice
        // crear stk_movement_header
        // crear stk_movement_detail
        // crear purchase
        const transaction = await repositories.purchase.transaction({
            autocommit: true
        })
        let createdPurchase = {}
        let createdInvoice = {}
        let createdStkMovementHeader = {}
        let createdStkMovementDetail = {}
        try {
            createdInvoice = await services.invoice.create(purchase.Invoice)
        } catch (e) {
            await transaction.rollback()
            throw e
        }
    }

    // const status = async id => {
    //     const purchase = await repositories.purchase.findById(id)
    //     if (!purchase) {
    //         throw errors.notFound('Invalid Purchase')
    //     }
    //     const purchaseInvoice = await purchase.getInvoice()
    //     if (!purchaseInvoice.status) {
    //         const transaction = await repositories.purchase.transaction({
    //             autocommit: true
    //         })
    //         try {
    //             await purchaseInvoice.update({
    //                 status: true
    //             }, {
    //                 transaction
    //             })
    //             await createInventoryFromPurchase(await purchase.getPurchaseDetails(), {
    //                 transaction
    //             })
    //             await transaction.commit()
    //         } catch (e) {
    //             await transaction.rollback()
    //             throw e
    //         }
    //     }
    //     return schemes.updated(
    //         await repositories.purchase.findById(purchase.id, {
    //             include: includes.updated()
    //         })
    //     )
    // }

    // const createInventoryFromPurchase = async (purchaseDetails, options) => {
    //     const createdInventoryHeader = await repositories.inventoryHeader.create({
    //             date: new Date()
    //         }, 
    //         options
    //     )
    //     for (const detail of purchaseDetails) {
    //         const article = await repositories.article.findById(detail.article_id)
    //         const measureConvertion = await repositories.measureConvertion.findOne({
    //             where: {
    //                 "1_measure_id": detail.stk_measure_id,
    //                 "2_measure_id": article.sale_measure_id
    //             }
    //         })
    //         await repositories.inventoryDetail.create({
    //                 inventory_header_id: createdInventoryHeader.id,
    //                 article_id: detail.article_id,
    //                 supplier_price: detail.supplier_price,
    //                 quantity: measureConvertion.convertion,
    //                 stk_measure_id: article.sale_measure_id
    //             },
    //             options
    //         )
    //     }
    // }

    return {
        finder,
        create,
        // status
    }
}

module.exports = purchaseService