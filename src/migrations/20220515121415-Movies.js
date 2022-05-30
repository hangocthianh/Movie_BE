'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Movies',
      'score',
       Sequelize.INTEGER
     )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn(
      'Movies',
      'score',
    );
  }
};
