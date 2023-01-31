import { questionsResultsRepo } from "../questionsResults/questionsResultsRepo";
import { resultsRepo } from "./resultsRepo";

export function resultsService() {
  const { createQuestionsResults, findByResultId } = questionsResultsRepo();
  const { create } = resultsRepo();
  async function createResults(
    candidates_id,
    title,
    started_at,
    ended_at,
    questions_results
  ) {
    const { id } = await create(candidates_id, title, started_at, ended_at);
    console.log("Service: ", questions_results);
    await createQuestionsResults(
      questions_results.map((record) => {
        record.results_id = id;
        return record;
      })
    );
    const result = await findByResultId(id);
    return result;
  }
  return {
    createResults,
  };
}
