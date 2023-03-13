import { candidatesRepo } from "./candidatesRepo";

export function candidatesController() {
  const { getById, getAll, create, update, deleteById, getByPage, getLength, getCandidateByUsername } = candidatesRepo();
  async function getCandidateById(req, res, next) {
    try {
      const { id } = req.auth;
      const { candidate_id } = req.params;

      const candidate = await getById(id, candidate_id);
      res.json(candidate);
    } catch (e) {
      next(e);
    }
  }
  async function getByUsername(req,res,next){
    try{

      const { id } = req.auth;
      const { username } = req.params;
      
      const candidates = await getCandidateByUsername(id, username);
      console.log(candidates);
      res.json(candidates);
    }catch(e){
      console.log(e);
    }

  }
  async function getPageCandidates(req,res,next){
    try{
      const { id } = req.auth;
      const {p,l} = req.query;

      const candidates = await getByPage(id,p,l);
      const candidatesLength = await getLength(id);
      res.json({candidates,
        count:candidatesLength,
      });

      // console.log(`Page: ${p}, Limit: ${l}`);
    }catch(e){
      next(e)
    }

  }
  async function getAllCandidates(req, res, next) {
    try {
      const { id } = req.auth;
      const candidates = await getAll(id);
      res.json(candidates);
    } catch (e) {
      next(e);
    }
  }
  async function createCandidate(req, res, next) {
    try {
      const { id } = req.auth;
      const { position, username, linkedin_url, feedback, avatar_url } =
        req.body;
      const candidate = await create(
        id,
        position,
        username,
        linkedin_url,
        feedback,
        avatar_url
      );
      res.json(candidate);
    } catch (e) {
      next(e);
    }
  }
  async function updateCandidate(req, res, next) {
    try {
      const { id } = req.auth;

      const {
        candidate_id,
        position,
        username,
        linkedin_url,
        feedback,
        avatar_url,
      } = req.body;
      const candidate = await update(
        id,
        candidate_id,
        position,
        username,
        linkedin_url,
        feedback,
        avatar_url
      );
      res.json(candidate);
    } catch (e) {
      next(e);
    }
  }
  async function deleteCandidate(req, res, next) {
    try {
      const { id } = req.auth;
      const { candidate_id } = req.body;
      await deleteById(id, candidate_id);
      res.json({
        message: "Successfully deleted",
      });
    } catch (e) {
      next(e);
    }
  }
  return {
    getCandidateById,
    getAllCandidates,
    createCandidate,
    updateCandidate,
    deleteCandidate,
    getPageCandidates,
    getByUsername
  };
}
