'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sale_detail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      item_voucher_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      article_code: {
        type: Sequelize.STRING(3),
        allowNull: false,
        references: {
          model: 'article',
          key: 'code'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      item_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      item_price: {
        type: Sequelize.FLOAT(10,2),
        allowNull: false
      },
      item_supplier_price: {
        type: Sequelize.FLOAT(10,2),
        allowNull: false
      },
      item_discount: {
        type: Sequelize.FLOAT(10,2),
        allowNull: false
      },
      item_internal_taxes: {
        type: Sequelize.FLOAT(10,2),
        allowNull: false
      },
      item_iva: {
        type: Sequelize.FLOAT(10,2),
        allowNull: false
      },
      item_total: {
        type: Sequelize.FLOAT(10,2),
        allowNull: false
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
    return queryInterface.dropTable('sale_detail');
  }
};