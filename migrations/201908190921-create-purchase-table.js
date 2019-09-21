'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('purchase', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            supplier_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'supplier',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            stk_movement_header_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'stk_movement_header',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            invoice_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'invoice',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('purchase');
    }
};