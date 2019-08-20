'use-strict'

const authIncludes = models => {

    const token = () => ([{
        model: models.Role,
        as: 'Roles',
        include: [{
            model: models.Module,
            as: 'Modules',
            include: [{
                model: models.Navigation,
                as: 'Navigations'
            }]
        }]
    }])

    return {
        token
    }
}

module.exports = authIncludes