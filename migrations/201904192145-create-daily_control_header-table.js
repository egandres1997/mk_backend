'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('daily_control_header', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            initial_amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            sales_amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            expenses_amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            total_amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            mercadopago_amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .then(() => {
                return queryInterface.addIndex('daily_control_header', ['date'])
            })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('daily_control_header');
    }
};