"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("questions_results", {
      question_point: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      results_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "results",
          key: "id",
        },
      },
      questions_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("questions_results");
  },
};
