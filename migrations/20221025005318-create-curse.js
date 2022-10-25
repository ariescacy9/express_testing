'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('curse', {
      id: {
        type: Sequelize.STRING,
        autoIncrement: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      credit: {
        type: Sequelize.INTEGER
      },
      nota_id: {
        type: Sequelize.INTEGER
      },
      condition_id: {
        type: Sequelize.INTEGER
      }
    },{
      tableName: 'curse'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('curse');
  }
};
