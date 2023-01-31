import {
  questions_results,
  questions,
  results,
} from "../../../models/index.js";
export function questionsResultsRepo() {
  async function createQuestionsResults(questionAnswers) {
    console.log("Repo: ", questionAnswers);

    const questionsResults = await questions_results.bulkCreate([
      ...questionAnswers,
    ]);
    return questionsResults;
  }
  async function findByResultId(results_id) {
    const questionsResults = await questions_results.findAll({
      where: { results_id },
      include: [{ model: questions }],
    });
    const questionWithResult = await questions_results.findOne({
      where: { results_id },
      include: [{ model: results }],
    });
    questionsResults.push(questionWithResult.result.dataValues);
    console.log(questionsResults.result);
    // console.log("Result with answers: ", questionsResults);
    return questionsResults;
  }

  return {
    createQuestionsResults,
    findByResultId,
  };
}
