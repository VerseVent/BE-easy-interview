"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "candidates",
      [
        {
          users_id: 1,
          position: "JSDeveloper",
          username: "testCandidateUser1",
          linkedin_url: "testUrl",
          feedback: "testFeedback",
          avatar_url: "testAvatarUrl",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          users_id: 1,
          position: "JSDeveloper",
          username: "testCandidateUser1",
          linkedin_url: "testUrl",
          feedback: "testFeedback",
          avatar_url: "testAvatarUrl",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          users_id: 2,
          position: "JSDeveloper",
          username: "testCandidate2",
          linkedin_url: "testUrl",
          feedback: "testFeedback",
          avatar_url: "testAvatarUrl",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          users_id: 2,
          position: "JSDeveloper",
          username: "testCandidate3",
          linkedin_url: "testUrl",
          feedback: null,
          avatar_url: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          users_id: 3,
          position: "JSDeveloper",
          username: "testCandidate4",
          linkedin_url: "testUrl",
          feedback: "testFeedback",
          avatar_url: "testAvatarUrl",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          users_id: 3,
          position: "JSDeveloper",
          username: "testCandidate4",
          linkedin_url: "testUrl",
          feedback: "testFeedback",
          avatar_url: "testAvatarUrl",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("candidates", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
