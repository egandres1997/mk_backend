'use-strict'

const BaseRepository = require('./BaseRepository')

class UserRepository extends BaseRepository {
    constructor(userModel) {
        super(userModel)
    }
}

module.exports = UserRepository