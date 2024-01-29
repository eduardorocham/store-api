"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Remova a coluna 'unit_price'
    await queryInterface.removeColumn("order_items", "unit_price");
  },

  async down(queryInterface, Sequelize) {
    // Se precisar reverter, adicione novamente a coluna 'unit_price'
    await queryInterface.addColumn("order_items", "unit_price", {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
  },
};
