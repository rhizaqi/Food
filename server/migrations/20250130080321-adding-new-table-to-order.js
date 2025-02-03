"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Orders", "orderId", Sequelize.STRING);
    await queryInterface.addColumn("Orders", "name", Sequelize.STRING);
    await queryInterface.addColumn("Orders", "categoryId", Sequelize.INTEGER);
    await queryInterface.addColumn("Orders", "imgUrl", Sequelize.STRING);
    await queryInterface.addColumn("Orders", "price", Sequelize.INTEGER);
    await queryInterface.addColumn("Orders", "quantity", Sequelize.INTEGER);
    await queryInterface.addColumn("Orders", "totalPrice", Sequelize.INTEGER);
    await queryInterface.addColumn("Orders", "statusPayment", Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Orders", "role", {});
    await queryInterface.removeColumn("Orders", "orderId", {});
    await queryInterface.removeColumn("Orders", "name", {});
    await queryInterface.removeColumn("Orders", "categoryId", {});
    await queryInterface.removeColumn("Orders", "imgUrl", {});
    await queryInterface.removeColumn("Orders", "price", {});
    await queryInterface.removeColumn("Orders", "quantity", {});
    await queryInterface.removeColumn("Orders", "totalPrice", {});
    await queryInterface.removeColumn("Orders", "statusPayment", {});
  },
};
