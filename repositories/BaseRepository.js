'use-strict'

const errors = require('../utils/errors')

class BaseRepository {
    constructor(model) {
        this.model = model
        
        this.transaction = this.transaction.bind(this)
        this.get = this.get.bind(this)
        this.finder = this.finder.bind(this)
        this.findById = this.findById.bind(this)
        this.findOne = this.findOne.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.destroy = this.destroy.bind(this)
        this.increment = this.increment.bind(this)
    }

    transaction(options) {
        return this.model.sequelize.transaction(options)
    }

    get(options) {
        return this.model.findAll(options)    
    }

    finder(options) {
        return require('../modules/finder')(this.model, options)
    }

    findById(id, options) {
        return this.model.findByPk(id, options)
    }

    findOne(options) {
        return this.model.findOne(options)
    }

    create(resource, options) {
        return this.model.create(resource, options)
    }

    async update(id, resource, options) {
        const row = await this.model.findByPk(id)
        if (!row) {
            throw errors.notFound(`The searched entity with identifier: ${id} not found`)
        }
        return row.update(resource, options)
    }

    async destroy(id) {
        const row = await this.model.findByPk(id)
        if (!row) {
            throw errors.notFound(`The searched entity with identifier: ${id} not found`)
        }
        return row.destroy()
    }

    async increment(id, field, options) {
        const row = await this.model.findByPk(id)
        if (!row) {
            throw errors.notFound(`The searched entity with identifier: ${id} not found`)
        }
        return row.increment(field, options)
    }
}

module.exports = BaseRepository