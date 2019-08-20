'use-strict'

const { Op } = require('sequelize')

const finder = async (
    model = {},
    options = {}
) => {
    if (!options.page) {
        return await __all(model, options)
    }
    return await __pagination(model, options)
}

const __all = async (
    model = {},
    {
        attributes,
        search,
        where,
        primaryKeys,
        include,
        order,
        raw,
        mutation
    } = {}
) => {
    let rows = []
    // if (primaryKeys && primaryKeys.length) {
        rows = await model.findAll({
            where: __where(search, where, primaryKeys),
            include,
            attributes: __attributes(await model.describe(), attributes),
            order: __orderBy(order),
            raw
        })
        rows = rows.map(row => row.toJSON())
        if (mutation && typeof (mutation) === 'function') {
            rows = mutation(rows)
        }
    // }
    return rows
}

const __pagination = async (
    model = {},
    {
        page,
        search,
        attributes,
        limit,
        primaryKeys,
        include,
        where,
        order,
        raw,
        mutation
    } = {}
) => {
    let rows = []
    let totalRows = 0
    let pagesQuantity = 0
    let nextPage = null
    // if (primaryKeys && primaryKeys.length) {
        limit = Number(limit) || Number(process.env.DEFAULT_PAGINATION)
        attributes = __attributes(await model.describe(), attributes)
        const offset = limit * (Number(page) - 1)
        where = __where(search, where, primaryKeys)
        totalRows = await model.count({
            where,
            include
        })
        rows = await model.findAll({
            where,
            offset,
            limit,
            include,
            attributes,
            order: __orderBy(order),
            raw
        })
        rows = rows.map(row => row.toJSON())
        if (mutation && typeof (mutation) === 'function') {
            rows = mutation(rows)
        }
        pagesQuantity = Math.ceil(totalRows / limit)
        nextPage = (Number(page) + 1)
    // }
    return {
        totalRows,
        pagesQuantity,
        rows,
        nextPage: (nextPage <= pagesQuantity) ? nextPage : null
    }
}

const __attributes = (schema = {}, attributes = []) => {
    if (!attributes.length) {
        return
    }
    return attributes.filter(attribute => schema[attribute])
}

const __orderBy = (order = '') => {
    let orderBy = ['created_at', 'desc']
    const [attribute, value] = order.split(':')
    if (attribute && value) {
        orderBy = [attribute, value]
    }
    return [orderBy]
}

const __where = (search = [], where = {}, primaryKeys = []) => {
    let wh = { [Op.and]: where }
    search.forEach(s => {
        const [attribute, value] = s.split(':')
        if (attribute && value) {
            if (typeof (value) === 'string') {
                wh[Op.and][attribute] = {
                    [Op.like]: `%${value}%`
                }
            } else {
                wh[Op.and][attribute] = value
            }
        }
    })
    if (primaryKeys && Array.isArray(primaryKeys) && primaryKeys.length) {
        wh[Op.and]['id'] = primaryKeys
    }
    return wh
}

module.exports = finder