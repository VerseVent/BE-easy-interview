import { celebrate } from "celebrate";
import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
import {
  allResultsSchema,
  createResultSchema,
  deleteResultSchema,
  singleResultSchema,
  singleResultWithAnswersSchema,
} from "../../middlewares/schemas/result";
import { resultsController } from "./resultsController";

export function resultsRoutes() {
  const router = Router();

  const {
    getResultById,
    getCandidatesAllResults,
    createResult,
    deleteResult,
    getResultWithAnswers,
  } = resultsController();

  router.get(
    "/all/:candidates_id",
    isUserLogged,
    celebrate(allResultsSchema),
    getCandidatesAllResults
  );
  router.get(
    "/get/candidate/:candidates_id/result/:result_id",
    isUserLogged,
    celebrate(singleResultSchema),
    getResultById
  );
  router.get(
    "/get/:result_id",
    isUserLogged,
    celebrate(singleResultWithAnswersSchema),
    getResultWithAnswers
  );
  router.post(
    "/create",
    isUserLogged,
    celebrate(createResultSchema),
    createResult
  );
  router.delete(
    "/delete",
    isUserLogged,
    celebrate(deleteResultSchema),
    deleteResult
  );

  return router;
}
