"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "questions",
      [
        {
          question_categories_id: 1,
          users_id: 1,
          max_point: 5,
          question: "Test HTML question ? 1, from first user",
          answer: "Test HTML answer. 1, from first user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_categories_id: 1,
          users_id: 1,
          max_point: 2,
          question: "Test HTML question ? 2, from first user",
          answer: "Test HTML answer. 2, from first user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_categories_id: 1,
          users_id: 1,
          max_point: 2,
          question: "Test HTML question ? 3, from first user",
          answer: "Test HTML answer. 3, from first user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_categories_id: 2,
          users_id: 2,
          max_point: 5,
          question: "Test JS question ? 1, from second user",
          answer: "Test JS answer. 1, from second user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_categories_id: 2,
          users_id: 2,
          max_point: 2,
          question: "Test JS question ? 2, from second user",
          answer: "Test JS answer. 2, from second user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_categories_id: 2,
          users_id: 2,
          max_point: 2,
          question: "Test JS question ? 3, from second user",
          answer: "Test JS answer. 3, from second user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("questions", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
