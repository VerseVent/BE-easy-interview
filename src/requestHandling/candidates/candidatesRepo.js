import { candidates } from "../../../models/index.js";

export function candidatesRepo() {
  async function getById(users_id, candidate_id) {
    const candidate = await candidates.findOne({
      where: {
        users_id,
        id: candidate_id,
      },
    });
    return candidate;
  }
  async function getAll(users_id) {
    const userCandidates = await candidates.findAll({
      where: {
        users_id,
      },
    });
    return userCandidates;
  }
  async function create(
    users_id,
    position,
    username,
    linkedin_url,
    feedback,
    avatar_url
  ) {
    const candidate = candidates.create({
      users_id,
      position,
      username,
      linkedin_url,
      feedback,
      avatar_url,
    });
    return candidate;
  }
  async function update(
    users_id,
    candidate_id,
    position,
    username,
    linkedin_url,
    feedback,
    avatar_url
  ) {
    const updatedCandidate = candidates.update(
      {
        users_id,
        candidate_id,
        position,
        username,
        linkedin_url,
        feedback,
        avatar_url,
      },
      { where: { users_id, id: candidate_id } }
    );
    return updatedCandidate;
  }
  async function deleteById(users_id, candidate_id) {
    const res = candidates.destroy({
      where: { users_id, id: candidate_id },
      cascade: true,
      truncate: false,
    });
    return res;
  }
  return {
    getById,
    getAll,
    create,
    update,
    deleteById,
  };
}
