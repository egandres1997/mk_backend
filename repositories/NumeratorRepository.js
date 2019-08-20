'use-strict'

const BaseRepository = require('./BaseRepository')

class NumeratorRepository extends BaseRepository {
    constructor(categoryModel) {
        super(categoryModel)
    }
}

module.exports = NumeratorRepository