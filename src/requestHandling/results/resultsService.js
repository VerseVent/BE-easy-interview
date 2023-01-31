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
    //Creates result in result's table
    const { id } = await create(candidates_id, title, started_at, ended_at);

    /*
      Sends array of answers with proper result id,
      to create inside many to many table
     */
    await createQuestionsResults(
      questions_results.map((record) => {
        record.results_id = id;
        return record;
      })
    );
    // returns nested result with answers
    const result = await findByResultId(id);
    return result;
  }
  return {
    createResults,
  };
}
