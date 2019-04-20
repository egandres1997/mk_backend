'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sale_tax', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      voucher_type_code: {
        type: Sequelize.STRING(3),
        allowNull: false,
        references: {
          model: 'voucher_type',
          key: 'code'
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
    return queryInterface.dropTable('sale_tax');
  }
};