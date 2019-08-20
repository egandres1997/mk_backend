'use-strict'

const articleIncludes = models => {

    const basic = () => ([{
        model: models.Measure,
        as: 'SaleMeasure'
    }, {
        model: models.Category,
        as: 'Categories'
    }, {
        model: models.Tax,
        as: 'Taxes'
    }])

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = articleIncludes