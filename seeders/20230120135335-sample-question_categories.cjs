"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "question_categories",
      [
        {
          title: "HTML",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "JS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("question_categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
