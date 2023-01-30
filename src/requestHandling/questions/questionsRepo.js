import { questions } from "../../../models/index.js";

export function questionsRepo() {
  async function getUserQuestions(users_id) {
    const userQuestions = await questions.findAll({
      where: { users_id },
    });
    return userQuestions;
  }
  async function getById(users_id, question_id) {
    const userQuestionById = await questions.findOne({
      where: { users_id, id: question_id },
    });
    console.log(userQuestionById);
    return userQuestionById;
  }
  async function createUserQuestion(
    userId,
    categoryId,
    maxPoint,
    question,
    answer
  ) {
    const userQuestions = await questions.create({
      question_categories_id: categoryId,
      users_id: userId,
      max_point: maxPoint,
      question,
      answer,
    });
    return userQuestions;
  }
  async function editUserQuestion(
    question_id,
    userId,
    categoryId,
    maxPoint,
    question,
    answer
  ) {
    const userQuestion = await questions.update(
      {
        question_categories_id: categoryId,
        users_id: userId,
        max_point: maxPoint,
        question,
        answer,
      },
      { where: { id: question_id, users_id: userId } }
    );
    return userQuestion;
  }

  async function getQuestionById(questionId, userId) {
    const question = await questions.findOne({
      where: { id: questionId, users_id: userId },
    });

    return question;
  }
  async function deleteUserQuestion(questionId, userId) {
    console.log(userId);
    const res = await questions.destroy({
      where: { id: questionId, users_id: userId },
    });

    return res;
  }

  return {
    getUserQuestions,
    createUserQuestion,
    editUserQuestion,
    deleteUserQuestion,
    getById,
  };
}
