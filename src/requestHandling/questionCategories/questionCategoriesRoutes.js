import { celebrate } from "celebrate";
import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
import {
  singleQuestionCategorySchema,
} from "../../middlewares/schemas/questionCategory";
import { questionCategoriesController } from "./questionCategoriesController";

export function questionCategoriesRoutes() {
  const router = Router();

  const {
    getCategories,
    getCategoryById
  } = questionCategoriesController();

  router.get("/all", isUserLogged, getCategories);
  router.get(
    "/get/:category_id",
    isUserLogged,
    celebrate(singleQuestionCategorySchema),
    getCategoryById
  );
  return router;
}
