'use-strict'

const _ = require('../modules/_')

const invoiceService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.invoice.finder({
        ...options,
        include: includes.basic()
    })

    const create = async invoice => {
        const createdInvoice = await repositories.invoice.create(invoice)    
        return schemes.created(
            await repositories.invoice.findById(createdInvoice.id, {
                include: includes.created()
            })
        )    
    }

    const update = async (id, invoice) => {
        const transaction = await repositories.invoice.transaction({
            autocommit: true
        })
    }

    return {
        finder,
        create,
        update
    }
}

module.exports = invoiceService