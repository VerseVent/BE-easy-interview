import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
import { resultsController } from "./resultsController";

export function resultsRoutes() {
  const router = Router();

  const { getResultById, getCandidatesAllResults, createResult, deleteResult } =
    resultsController();

  router.get("/all/:candidates_id", isUserLogged, getCandidatesAllResults);
  router.get(
    "/get/candidate/:candidates_id/result/:result_id",
    isUserLogged,
    getResultById
  );
  router.post("/create", isUserLogged, createResult);
  router.delete("/delete", isUserLogged, deleteResult);

  return router;
}
