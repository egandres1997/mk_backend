'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('sale_has_tax', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tax_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'tax',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
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
            sale_header_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'sale_header',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            sale_detail_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'sale_detail',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            tax_amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('sale_has_tax');
    }
};