'use-strict'

const BaseRepository = require('./BaseRepository')

class InventoryHeaderRepository extends BaseRepository {
    constructor(inventoryHeaderModel) {
        super(inventoryHeaderModel)
    }
}

module.exports = InventoryHeaderRepository