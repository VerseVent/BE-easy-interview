import { resultsService } from "./resultsService";
import { resultsRepo } from "./resultsRepo";

export function resultsController() {
  const { getById, getAll, deleteById } = resultsRepo();
  const { createResults } = resultsService();

  async function getResultById(req, res, next) {
    try {
      const { candidates_id, result_id } = req.params;

      const result = await getById(candidates_id, result_id);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
  async function getCandidatesAllResults(req, res, next) {
    try {
      const { candidates_id } = req.params;
      const results = await getAll(candidates_id);
      res.json(results);
    } catch (e) {
      next(e);
    }
  }
  async function createResult(req, res, next) {
    try {
      const { candidates_id, title, started_at, ended_at, questions_results } =
        req.body;
      const result = await createResults(
        candidates_id,
        title,
        started_at,
        ended_at,
        questions_results
      );
      // const result = await create(candidates_id, title, started_at, ended_at);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
  async function deleteResult(req, res, next) {
    try {
      const { candidates_id, result_id } = req.body;
      await deleteById(candidates_id, result_id);
      res.json({
        message: "Successfully deleted",
      });
    } catch (e) {
      next(e);
    }
  }
  return {
    getResultById,
    getCandidatesAllResults,
    createResult,
    deleteResult,
  };
}
