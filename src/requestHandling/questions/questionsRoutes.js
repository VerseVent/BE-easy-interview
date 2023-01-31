import { celebrate } from "celebrate";
import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
import {
  createQuestionSchema,
  deleteQuestionSchema,
  editQuestionSchema,
  singleQuestionSchema,
} from "../../middlewares/schemas/questions";
import { questionsController } from "./questionsController";

export function questionsRoutes() {
  const router = Router();

  const {
    getQuestions,
    createQuestion,
    editQuestion,
    deleteQuestion,
    getQuestionById,
  } = questionsController();

  router.get("/all", isUserLogged, getQuestions);
  router.get(
    "/get/:question_id",
    isUserLogged,
    celebrate(singleQuestionSchema),
    getQuestionById
  );
  router.post(
    "/create",
    isUserLogged,
    celebrate(createQuestionSchema),
    createQuestion
  );
  router.put(
    "/edit",
    isUserLogged,
    celebrate(editQuestionSchema),
    editQuestion
  );
  router.delete(
    "/delete",
    isUserLogged,
    celebrate(deleteQuestionSchema),
    deleteQuestion
  );

  return router;
}
