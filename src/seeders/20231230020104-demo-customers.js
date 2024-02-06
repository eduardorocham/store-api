"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "João da Silva",
          email: "joao@example.com",
          address: "Rua A, 123",
          phone: "555-1234",
        },
        {
          name: "Maria Souza",
          email: "maria@example.com",
          address: "Avenida B, 456",
          phone: "555-5678",
        },
        {
          name: "Pedro Oliveira",
          email: "pedro@example.com",
          address: "Praça C, 789",
          phone: "555-9012",
        },
        {
          name: "Ana Santos",
          email: "ana@example.com",
          address: "Rua D, 101",
          phone: "555-3456",
        },
        {
          name: "Lucas Pereira",
          email: "lucas@example.com",
          address: "Avenida E, 222",
          phone: "555-7890",
        },
        {
          name: "Carla Rodrigues",
          email: "carla@example.com",
          address: "Praça F, 333",
          phone: "555-6789",
        },
        {
          name: "Fernando Silva",
          email: "fernando@example.com",
          address: "Rua G, 444",
          phone: "555-4567",
        },
        {
          name: "Patrícia Costa",
          email: "patricia@example.com",
          address: "Avenida H, 555",
          phone: "555-2345",
        },
        {
          name: "Marcos Oliveira",
          email: "marcos@example.com",
          address: "Praça I, 666",
          phone: "555-8901",
        },
        {
          name: "Juliana Almeida",
          email: "juliana@example.com",
          address: "Rua J, 777",
          phone: "555-5678",
        },
        {
          name: "Roberto Santos",
          email: "roberto@example.com",
          address: "Avenida K, 888",
          phone: "555-1234",
        },
        {
          name: "Camila Lima",
          email: "camila@example.com",
          address: "Praça L, 999",
          phone: "555-9012",
        },
        {
          name: "Gustavo Pereira",
          email: "gustavo@example.com",
          address: "Rua M, 111",
          phone: "555-7890",
        },
        {
          name: "Aline Oliveira",
          email: "aline@example.com",
          address: "Avenida N, 222",
          phone: "555-6789",
        },
        {
          name: "Rafaela Costa",
          email: "rafaela@example.com",
          address: "Praça O, 333",
          phone: "555-5678",
        },
        {
          name: "Daniel Santos",
          email: "daniel@example.com",
          address: "Rua P, 444",
          phone: "555-4567",
        },
        {
          name: "Marcela Lima",
          email: "marcela@example.com",
          address: "Avenida Q, 555",
          phone: "555-2345",
        },
        {
          name: "Roberto Almeida",
          email: "roberto@example.com",
          address: "Praça R, 666",
          phone: "555-8901",
        },
        {
          name: "Vanessa Pereira",
          email: "vanessa@example.com",
          address: "Rua S, 777",
          phone: "555-5678",
        },
        {
          name: "Guilherme Oliveira",
          email: "guilherme@example.com",
          address: "Avenida T, 888",
          phone: "555-1234",
        },
        {
          name: "Patrícia Lima",
          email: "patricia@example.com",
          address: "Praça U, 999",
          phone: "555-9012",
        },
        {
          name: "Ricardo Costa",
          email: "ricardo@example.com",
          address: "Rua V, 111",
          phone: "555-7890",
        },
        {
          name: "Mariana Santos",
          email: "mariana@example.com",
          address: "Avenida W, 222",
          phone: "555-6789",
        },
        {
          name: "Thiago Almeida",
          email: "thiago@example.com",
          address: "Praça X, 333",
          phone: "555-5678",
        },
        {
          name: "Renata Lima",
          email: "renata@example.com",
          address: "Rua Y, 444",
          phone: "555-4567",
        },
        {
          name: "Julio Pereira",
          email: "julio@example.com",
          address: "Avenida Z, 555",
          phone: "555-2345",
        },
        {
          name: "Camila Santos",
          email: "camila.santos@example.com",
          address: "Praça 1, 666",
          phone: "555-8901",
        },
        {
          name: "Thiago Costa",
          email: "thiago.costa@example.com",
          address: "Rua 2, 777",
          phone: "555-5678",
        },
        {
          name: "Ana Lima",
          email: "ana.lima@example.com",
          address: "Avenida 3, 888",
          phone: "555-1234",
        },
        {
          name: "Carla Pereira",
          email: "carla.pereira@example.com",
          address: "Praça 4, 999",
          phone: "555-9012",
        },
        {
          name: "Roberto Alves",
          email: "roberto.alves@example.com",
          address: "Rua 5, 111",
          phone: "555-7890",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("customers", null, {});
  },
};
