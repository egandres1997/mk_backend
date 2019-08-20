'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('numerator', {
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
                allowNull: false,
            },
            index: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 1
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .then(() => {
                return queryInterface.addIndex('numerator', ['code'], {
                    unique: true
                })
            })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('numerator');
    }
};