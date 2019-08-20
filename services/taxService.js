'use-strict'

const taxService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.tax.finder(options)

    const create = async tax => {
        const createdTax = await repositories.tax.create(tax)
        return schemes.created(createdTax)
    }

    const update = async (id, tax) => {
        const updatedTax = await repositories.tax.update(id, tax)
        return schemes.updated(updatedTax)
    }

    return {
        finder,
        create,
        update
    }
}

module.exports = taxService