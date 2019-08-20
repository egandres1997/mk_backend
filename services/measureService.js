'use-strict'

const measureService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.measure.finder(options)

    const create = async measure => {
        const createdMeasure = await repositories.measure.create(measure)
        return schemes.created(createdMeasure)
    }

    const update = async (id, measure) => {
        const updatedMeasure = await repositories.measure.update(id, measure)
        return schemes.updated(updatedMeasure)
    }

    return {
        finder,
        create,
        update
    }
}

module.exports = measureService