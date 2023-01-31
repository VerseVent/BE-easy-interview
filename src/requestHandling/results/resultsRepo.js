import { results } from "../../../models/index.js";

export function resultsRepo() {
  async function getById(candidates_id, result_id) {
    const result = await results.findOne({
      where: {
        candidates_id,
        id: result_id,
      },
    });
    return result;
  }
  async function getAll(candidates_id) {
    const candidateResults = await results.findAll({
      where: {
        candidates_id,
      },
    });
    return candidateResults;
  }
  async function create(candidates_id, title, started_at, ended_at) {
    const result = await results.create({
      candidates_id,
      title,
      started_at,
      ended_at,
    });
    return result;
  }
  async function deleteById(candidates_id, result_id) {
    const res = await results.destroy({
      where: { candidates_id, id: result_id },
      cascade: true,
      truncate: false,
    });
    return res;
  }
  return {
    getById,
    getAll,
    create,
    deleteById,
  };
}
