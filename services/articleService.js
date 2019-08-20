'use-strict'

const _ = require('../modules/_')

const articleService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.article.finder({
        ...options,
        include: includes.basic()
    })

    const create = async article => {
        const transaction = await repositories.article.transaction({
            autocommit: true
        })
        let createdArticle = {}
        try {
            const code = await generateCode(article.parent_category_id)
            createdArticle = await repositories.article.create({
                ...article, code
            }, {
                transaction
            })
            if (_.isArray(article.Categories)) {
                await createdArticle.addCategory(article.Categories, {
                    transaction
                })
            }
            if (_.isArray(article.Taxes)) {
                await createdArticle.addTax(article.Taxes, {
                    transaction
                })
            }
            await transaction.commit()
        } catch (e) {
            await transaction.rollback()
            throw e
        }
        return schemes.created(
            await repositories.article.findById(createdArticle.id, {
                include: includes.created()
            })
        )
    }

    const update = async (id, article) => {
        const transaction = await repositories.article.transaction({
            autocommit: true
        })
        let updatedArticle = {}
        try {
            updatedArticle = await repositories.article.update(id, article, {
                transaction,
                fields: ['name', 'description', 'barcode', 'sale_measure_id']
            })
            if (_.isArray(article.Categories)) {
                await updatedArticle.setCategories(article.Categories, {
                    transaction
                })
            }
            if (_.isArray(article.Taxes)) {
                await updatedArticle.setTaxes(article.Taxes, {
                    transaction
                })
            }
            await transaction.commit()
        } catch (e) {
            await transaction.rollback()
            throw e
        }
        return schemes.updated(
            await repositories.article.findById(updatedArticle.id, {
                include: includes.updated()
            })
        )
    }

    const generateCode = async parent_category_id => {
        const categoryRoot = await repositories.category.findById(parent_category_id)
        const numerator = await repositories.numerator.findOne({
            where: { code: categoryRoot.code }
        })
        const incremented = await repositories.numerator.update(numerator.id, { 
            index: (numerator.index + 1) 
        })
        return `${categoryRoot.code}${_.pad(incremented.index, 6)}`
    }

    return {
        finder,
        create,
        update
    }
}

module.exports = articleService