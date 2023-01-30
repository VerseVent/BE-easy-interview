import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
import { candidatesController } from "./candidatesController";

export function candidatesRoutes() {
  const router = Router();

  const {
    getCandidateById,
    getAllCandidates,
    createCandidate,
    updateCandidate,
    deleteCandidate,
  } = candidatesController();

  router.get("/all", isUserLogged, getAllCandidates);
  router.get("/get/:candidate_id", isUserLogged, getCandidateById);
  router.post("/create", isUserLogged, createCandidate);
  router.put("/edit", isUserLogged, updateCandidate);
  router.delete("/delete", isUserLogged, deleteCandidate);

  return router;
}
