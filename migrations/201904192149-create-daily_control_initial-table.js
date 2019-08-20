'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('daily_control_initial', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            daily_control_header_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'daily_control_header',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            currency_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'currency',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            total_amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('daily_control_initial');
    }
};