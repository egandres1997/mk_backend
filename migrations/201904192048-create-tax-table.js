'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tax', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING(3),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            percentage: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .then(() => {
                return queryInterface.addIndex('tax', ['code'], {
                    unique: true
                })
            })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('tax');
    }
};