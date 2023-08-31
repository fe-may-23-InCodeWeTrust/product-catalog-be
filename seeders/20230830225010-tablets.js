'use strict';

const tablets = require('../api/tablets.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tablets',
      tablets.map((tablet) => ({
        ...tablet,
        description: JSON.stringify(tablet.description),
        category: 'tablets',
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tablets');
  },
};
