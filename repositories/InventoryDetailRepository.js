'use-strict'

const BaseRepository = require('./BaseRepository')

class InventoryDetailRepository extends BaseRepository {
    constructor(inventoryDetailModel) {
        super(inventoryDetailModel)
    }
}

module.exports = InventoryDetailRepository