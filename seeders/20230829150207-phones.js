'use strict';

const phones = require('../api/phones.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'phones',
      phones.map((phone) => ({
        ...phone,
        description: JSON.stringify(phone.description),
        category: 'phones',
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones');
  },
};
