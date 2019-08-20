'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('article_has_category', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'category',
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
        return queryInterface.dropTable('article_has_category');
    }
};