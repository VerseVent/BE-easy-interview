import { questionsRepo } from "./questionsRepo";

export function questionsController() {
  const {
    getUserQuestions,
    createUserQuestion,
    editUserQuestion,
    deleteUserQuestion,
    getById,
  } = questionsRepo();
  async function getQuestions(req, res, next) {
    try {
      const { id } = req.auth;
      const questions = await getUserQuestions(id);
      res.json(questions);
    } catch (e) {
      next(e);
    }
  }
  async function createQuestion(req, res, next) {
    try {
      const { id } = req.auth;
      const { category_id, maxPoint, question, answer } = req.body;
      const userQuestion = await createUserQuestion(
        id,
        category_id,
        maxPoint,
        question,
        answer
      );
      res.json(userQuestion);
    } catch (e) {
      next(e);
    }
  }
  async function editQuestion(req, res, next) {
    try {
      const { id } = req.auth;
      const { question_id, category_id, maxPoint, question, answer } = req.body;
      const userQuestion = await editUserQuestion(
        question_id,
        id,
        category_id,
        maxPoint,
        question,
        answer
      );
      res.json(userQuestion);
    } catch (e) {
      next(e);
    }
  }
  async function deleteQuestion(req, res, next) {
    try {
      const { id } = req.auth;
      const { question_id } = req.body;
      await deleteUserQuestion(question_id, id);

      res.json({
        message: "Successfully deleted",
      });
    } catch (e) {
      next(e);
    }
  }
  async function getQuestionById(req, res, next) {
    try {
      const { id } = req.auth;
      const { question_id } = req.params;
      console.log(question_id);
      const question = await getById(id, question_id);
      res.json(question);
    } catch (e) {
      next(e);
    }
  }
  return {
    getQuestions,
    createQuestion,
    editQuestion,
    deleteQuestion,
    getQuestionById,
  };
}
