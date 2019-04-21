'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('article_tax', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      article_code: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'article',
          key: 'code'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      tax_type_code: {
        type: Sequelize.STRING(3),
        allowNull: false,
        references: {
          model: 'tax_type',
          key: 'code'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP'),
      }
    })
    .catch((err) => console.log(err))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('article_tax');
  }
};