'use-strict'

const userIncludes = models => {

    const basic = () => ([{
        model: models.Role,
        as: 'Roles'
    }])

    return {
        basic,
        created: basic,
        updated: basic
    }
}

module.exports = userIncludes