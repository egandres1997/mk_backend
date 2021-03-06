'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('stk_movement_header', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            voucher_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'voucher_type',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            voucher_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            voucher_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            stk_movement_type: {
                type: Sequelize.ENUM('E', 'S'),
                allowNull: false
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('stk_movement_header');
    }
};