'use-strict'

const errors = require('../utils/errors')
const _ = require('../modules/_')
const stkMovementType = require('../constants/stkMovementType')

const purchaseHeaderService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.purchaseHeader.finder({
        ...options,
        include: includes.basic()
    })

    const create = async purchase => {
        const transaction = await repositories.purchaseHeader.transaction({
            autocommit: true
        })
        let createdStkMovementHeader = {}
        let createdPurchaseHeader = {}
        try {
            createdStkMovementHeader = await repositories.stkMovementHeader.create({
                ...purchase.StkMovementHeader,
                stk_movement_type: stkMovementType.INPUT
            }, {
                transaction
            })
            createdPurchaseHeader = await repositories.purchaseHeader.create({
                supplier_id: purchase.supplier_id,
                stk_movement_header_id: createdStkMovementHeader.id
            }, {
                    transaction
                })
            if (_.isArray(purchase.PurchaseDetail)) {
                for (const detail of purchase.PurchaseDetail) {
                    await repositories.purchaseDetail.create({
                        ...detail,
                        purchase_header_id: createdPurchaseHeader.id
                    }, {
                            transaction
                        })
                }
                await createInventoryFromPurchase(purchase.PurchaseDetail, {
                    transaction
                })
            }
            await transaction.commit()
        } catch (e) {
            await transaction.rollback()
            throw e
        }
        return schemes.created(
            await repositories.purchaseHeader.findById(createdPurchaseHeader.id, {
                include: includes.created()
            })
        )
    }

    const status = async id => {
        const purchaseHeader = await repositories.purchaseHeader.findById(id)
        if (!purchaseHeader) {
            throw errors.notFound('Invalid Purchase')
        }
        const purchaseInvoice = await purchaseHeader.getInvoice()
        if (!purchaseInvoice.status) {
            const transaction = await repositories.purchaseHeader.transaction({
                autocommit: true
            })
            try {
                await purchaseInvoice.update({
                    status: true
                }, {
                    transaction
                })
                await createInventoryFromPurchase(await purchaseHeader.getPurchaseDetails(), {
                    transaction
                })
                await transaction.commit()
            } catch (e) {
                await transaction.rollback()
                throw e
            }
        }
        return schemes.updated(
            await repositories.purchaseHeader.findById(purchaseHeader.id, {
                include: includes.updated()
            })
        )
    }

    const createInventoryFromPurchase = async (purchaseDetails, options) => {
        const createdInventoryHeader = await repositories.inventoryHeader.create({
                date: new Date()
            }, 
            options
        )
        for (const detail of purchaseDetails) {
            const article = await repositories.article.findById(detail.article_id)
            const measureConvertion = await repositories.measureConvertion.findOne({
                where: {
                    "1_measure_id": detail.stk_measure_id,
                    "2_measure_id": article.sale_measure_id
                }
            })
            await repositories.inventoryDetail.create({
                    inventory_header_id: createdInventoryHeader.id,
                    article_id: detail.article_id,
                    supplier_price: detail.supplier_price,
                    quantity: measureConvertion.convertion,
                    stk_measure_id: article.sale_measure_id
                },
                options
            )
        }
    }

    return {
        finder,
        create,
        status
    }
}

module.exports = purchaseHeaderService