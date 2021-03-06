'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('price_list_detail', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            price_list_header_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'price_list_header',
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
            sale_price: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('price_list_detail');
    }
};