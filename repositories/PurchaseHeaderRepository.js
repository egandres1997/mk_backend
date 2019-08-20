'use-strict'

const BaseRepository = require('./BaseRepository')

class PurchaseHeaderRepository extends BaseRepository {
    constructor(purchaseHeaderModel) {
        super(purchaseHeaderModel)
    }
}

module.exports = PurchaseHeaderRepository