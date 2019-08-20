'use-strict'

const BaseRepository = require('./BaseRepository')

class PurchaseDetailRepository extends BaseRepository {
    constructor(purchaseDetailModel) {
        super(purchaseDetailModel)
    }
}

module.exports = PurchaseDetailRepository