'use-strict'

const BaseRepository = require('./BaseRepository')

class ArticleRepository extends BaseRepository {
    constructor(articleModel) {
        super(articleModel)
    }
}

module.exports = ArticleRepository