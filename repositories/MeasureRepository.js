'use-strict'

const BaseRepository = require('./BaseRepository')

class MeasureRepository extends BaseRepository {
    constructor(categoryModel) {
        super(categoryModel)
    }
}

module.exports = MeasureRepository