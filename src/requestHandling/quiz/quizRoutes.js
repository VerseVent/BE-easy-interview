import { celebrate } from "celebrate";
import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
import {
  quizSchema,
} from "../../middlewares/schemas/result";
import { resultsController } from "./quizController";

export function quizRoutes() {
  const router = Router();

  const {
    saveQuizProgress,
    getQuizProgress
  } = resultsController();

  router.post(
    "/save",
    isUserLogged,
    // celebrate(allResultsSchema),
    saveQuizProgress
  );
  getQuizProgress
  router.get(
    "/get",
    isUserLogged,
    getQuizProgress
  );
  return router;
}