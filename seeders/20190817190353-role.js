'use strict'

const Roles = require('../mocks/seeds/role.mock')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('role', Roles, {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('role', null, {});
    }
};
