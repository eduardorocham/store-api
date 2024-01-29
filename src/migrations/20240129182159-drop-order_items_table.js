"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable("order_items");
  },

  async down(queryInterface, Sequelize) {},
};
