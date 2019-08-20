'use-strict'

const { Op } = require('sequelize')

const categoryService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.category.finder(options)

    const parents = options => finder({
        ...options,
        where: {
            parent_code: null
        }
    })

    const childrens = options => finder({
        ...options,
        where: {
            [Op.not]: {
                parent_code: null
            }
        }
    })

    const create = async category => {
        const createdCategory = await repositories.category.create(category)
        return schemes.created(createdCategory)
    }

    const update = async (id, category) => {
        const updatedCategory = await repositories.category.update(id, category)
        return schemes.updated(updatedCategory)
    }

    return {
        finder,
        parents,
        childrens,
        create,
        update
    }
}

module.exports = categoryService