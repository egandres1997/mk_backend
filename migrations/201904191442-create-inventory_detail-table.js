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
      unit_price: {
        type: Sequelize.FLOAT(10,2),
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    })
    .catch((err) => console.log(err))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('inventory_detail');
  }
};