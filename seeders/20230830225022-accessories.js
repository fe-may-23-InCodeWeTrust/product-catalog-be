/* eslint-disable max-len */
'use strict';

const accessories = require('../api/accessories.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'accessories',
      accessories.map((accessory) => ({
        ...accessory,
        description: JSON.stringify(accessory.description),
        category: 'accessories',
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accessories');
  },
};
