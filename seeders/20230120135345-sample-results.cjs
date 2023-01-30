"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "results",
      [
        {
          title: "TestResultTitle1",
          started_at: new Date(),
          ended_at: new Date(),
          candidates_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("results", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
