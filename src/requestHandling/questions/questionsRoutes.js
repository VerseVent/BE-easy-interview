import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
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
  router.get("/get/:question_id", isUserLogged, getQuestionById);
  router.post("/create", isUserLogged, createQuestion);
  router.put("/edit", isUserLogged, editQuestion);
  router.delete("/delete", isUserLogged, deleteQuestion);

  return router;
}
