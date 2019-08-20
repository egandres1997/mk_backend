'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('article', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            barcode: {
                type: Sequelize.STRING,
                allowNull: true
            },
            stk_measure_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'measure',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            sale_measure_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'measure',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            price_list_header_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'price_list_header',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 1
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .then(() => {
                return queryInterface.addIndex('article', ['code'], {
                    unique: true
                })
            })
            .then(() => {
                return queryInterface.addIndex('article', ['name', 'description', 'barcode'])
            })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('article');
    }
};