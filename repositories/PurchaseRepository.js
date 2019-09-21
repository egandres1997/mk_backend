'use-strict'

const BaseRepository = require('./BaseRepository')

class PurchaseRepository extends BaseRepository {
    constructor(model) {
        super(model)
    }
}

module.exports = PurchaseRepository