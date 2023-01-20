"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("questions_results", {
      question_point: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      result_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "results",
          key: "id",
        },
      },
      question_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "questions",
          key: "id",
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("questions_results");
  },
};
