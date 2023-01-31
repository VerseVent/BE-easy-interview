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
    return userQuestionById;
  }
  async function createUserQuestion(
    users_id,
    category_id,
    maxPoint,
    question,
    answer
  ) {
    const userQuestions = await questions.create({
      question_categories_id: category_id,
      users_id,
      max_point: maxPoint,
      question,
      answer,
    });
    return userQuestions;
  }
  async function editUserQuestion(
    question_id,
    users_id,
    category_id,
    maxPoint,
    question,
    answer
  ) {
    const userQuestion = await questions.update(
      {
        question_categories_id: category_id,
        users_id,
        max_point: maxPoint,
        question,
        answer,
      },
      { where: { id: question_id, users_id } }
    );
    return userQuestion;
  }

  async function deleteUserQuestion(question_id, users_id) {
    const res = await questions.destroy({
      where: { id: question_id, users_id },
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
