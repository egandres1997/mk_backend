'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('measure_convertion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      "1_measure_id": {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'measure',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      "2_measure_id": {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'measure',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      convertion: {
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
    return queryInterface.dropTable('measure_convertion');
  }
};