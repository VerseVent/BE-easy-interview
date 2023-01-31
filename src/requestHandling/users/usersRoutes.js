import { usersController } from "./usersController.js";
import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged.js";
import {
  deleteSchema,
  loginSchema,
  signupSchema,
} from "../../middlewares/schemas/user.js";
const { celebrate } = require("celebrate");

export function usersRoutes() {
  const { getUsers, signupUser, loginUser, deleteUserById } = usersController();
  const router = Router();

  router.post("/signup", celebrate(signupSchema), signupUser);
  router.post("/login", celebrate(loginSchema), loginUser);
  router.delete(
    "/delete",
    isUserLogged,
    celebrate(deleteSchema),
    deleteUserById
  );
  router.get("/getAllUsers", getUsers);
  return router;
}
