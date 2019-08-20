'use-strict'

const BaseRepository = require('./BaseRepository')

class StkMovementHeaderRepository extends BaseRepository {
    constructor(model) {
        super(model)
    }
}

module.exports = StkMovementHeaderRepository