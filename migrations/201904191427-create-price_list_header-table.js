'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('price_list_header', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            from_date: {
                type: Sequelize.DATEONLY,
                allowNull: true,
                defaultValue: null
            },
            to_date: {
                type: Sequelize.DATEONLY,
                allowNull: true,
                defaultValue: null
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        })
            .catch((err) => console.log(err))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('price_list_header');
    }
};