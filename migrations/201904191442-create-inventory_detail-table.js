'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('inventory_detail', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            inventory_header_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'inventory_header',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
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
            supplier_price: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            stk_measure_id: {
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
        return queryInterface.dropTable('inventory_detail');
    }
};