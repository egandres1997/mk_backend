'use-strict'

const _ = require('../modules/_')

const userService = (
    services,
    repositories,
    includes,
    schemes
) => {

    const finder = options => repositories.user.finder(options)

    const create = async user => {
        const transaction = await repositories.user.transaction({
            autocommit: true
        })
        let createdUser = {}
        try {
            createdUser = await repositories.user.create(user, {
                transaction
            })
            if (_.isArray(user.Roles)) {
                await createdUser.addRole(user.Roles, {
                    transaction
                })
            }
            await transaction.commit()
        } catch (e) {
            await transaction.rollback()
            throw e
        }
        return schemes.created(
            await repositories.user.findById(createdUser.id, {
                include: includes.created()
            })
        )
    }

    const update = async (id, user) => {
        const transaction = await repositories.user.transaction({
            autocommit: true
        })
        let updatedUser = {}
        try {
            updatedUser = await repositories.user.update(id, user, {
                transaction
            })
            if (_.isArray(user.Roles)) {
                await updatedUser.setRoles(user.Roles, {
                    transaction
                })
            }
            await transaction.commit()
        } catch (e) {
            await transaction.rollback()
            throw e
        }
        return schemes.updated(
            await repositories.user.findById(updatedUser.id, {
                include: includes.updated()
            })
        )
    }

    return {
        finder,
        create,
        update
    }
}

module.exports = userService