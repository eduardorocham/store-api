'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        name: 'João da Silva',
        email: 'joao@example.com',
        address: 'Rua A, 123',
        phone: '555-1234'
      },
      {
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        address: 'Avenida B, 456',
        phone: '555-5678'
      },
      {
        name: 'José Santos',
        email: 'jose@example.com',
        address: 'Praça C, 789',
        phone: '555-9012'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
