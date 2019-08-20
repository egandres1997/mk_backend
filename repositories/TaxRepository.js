'use-strict'

const BaseRepository = require('./BaseRepository')

class TaxRepository extends BaseRepository {
    constructor(categoryModel) {
        super(categoryModel)
    }
}

module.exports = TaxRepository