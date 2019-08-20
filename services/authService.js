'use-strict'

const errors = require('../utils/errors')

const authService = (
    services,
    repositories,
    includes
) => {

    const token = async ({
        email,
        password
    }) => {
        if (!email || !password) {
            throw errors.badRequest('You must send email and password')
        }
        let user = await repositories.user.findOne({
            where: { email },
            include: includes.token()
        })
        if (!user) {
            throw errors.unprocessableEntity('Wrong email')
        }
        if (!user.status) {
            throw errors.unprocessableEntity('This account is inactive')
        }
        const verified = await user.verifyPassword(password)
        if (!verified) {
            user = await user.update({
                failed_attempts: (user.failed_attempts + 1)
            })
            if (user.failed_attempts === Number(process.env.MAX_FAILED_ATTEMPTS)) {
                await user.update({
                    status: false
                })
            }
            throw errors.unprocessableEntity('Wrong password')
        }
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            surname: user.surname,
            Roles: user.Roles,
            token: user.createToken()
        }
    }

    return {
        token
    }
}

module.exports = authService