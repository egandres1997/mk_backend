'use-strict'

const BaseRepository = require('./BaseRepository')

class RoleRepository extends BaseRepository {
    constructor(roleModel) {
        super(roleModel)
    }
}

module.exports = RoleRepository