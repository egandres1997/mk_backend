'use-strict'

const BaseRepository = require('./BaseRepository')

class MeasureConvertionRepository extends BaseRepository {
    constructor(measureConvertionModel) {
        super(measureConvertionModel)
    }
}

module.exports = MeasureConvertionRepository