"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "questions_results",
      [
        {
          question_point: 3,
          questions_id: 1,
          results_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_point: 1,
          questions_id: 2,
          results_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("questions_results", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
