'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('sale_header', {
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
            client_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            amount: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            discounts: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            exempt: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            iva: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            internal_taxes: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            total: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            income_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'income_type',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            observations: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('sale_header');
    }
};