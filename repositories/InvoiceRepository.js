'use-strict'

const BaseRepository = require('./BaseRepository')

class InvoiceRepository extends BaseRepository {
    constructor(invoiceModel) {
        super(invoiceModel)
    }
}

module.exports = InvoiceRepository