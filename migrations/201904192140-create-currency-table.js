'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('currency', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            value: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('currency');
    }
};