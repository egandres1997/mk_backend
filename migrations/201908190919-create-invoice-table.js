'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('invoice', {
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
            issue_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            number_cae: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            sale_point: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 0
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('invoice');
    }
};