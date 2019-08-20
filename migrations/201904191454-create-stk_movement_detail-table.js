'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('stk_movement_detail', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
            movement_voucher_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            article_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'article',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            unit_price: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            measure_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'measure',
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
        return queryInterface.dropTable('stk_movement_detail');
    }
};