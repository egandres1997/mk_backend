'use-strict'

const BaseRepository = require('./BaseRepository')

class CategoryRepository extends BaseRepository {
    constructor(categoryModel) {
        super(categoryModel)
    }
}

module.exports = CategoryRepository