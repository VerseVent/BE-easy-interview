import { questions_results } from "../../../models/index.js";

export function questionsResultsRepo() {
  async function createQuestionsResults(questionAnswers) {
    console.log("Repo: ", questionAnswers);

    const questionsResults = await questions_results.bulkCreate([
      ...questionAnswers,
      // {
      //   question_point,
      //   questions_id,
      //   results_id,
      // },
    ]);
    return questionsResults;
  }
  async function findByResultId(results_id) {
    const questionsResults = await questions_results.findAll({
      where: { results_id },
      // include: [{ all: true, nested: true }],
    });
    return questionsResults;
  }

  return {
    createQuestionsResults,
    findByResultId,
  };
}
