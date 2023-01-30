"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          roles_id: 2,
          username: "TestUser1",
          password: "password1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roles_id: 2,
          username: "TestUser2",
          password: "password2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roles_id: 2,
          username: "TestUser3",
          password: "password3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roles_id: 1,
          username: "TestUser4",
          password: "password4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
