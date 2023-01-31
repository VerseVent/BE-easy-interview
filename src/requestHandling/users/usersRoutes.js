import { usersController } from "./usersController.js";
import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged.js";

export function usersRoutes() {
  const { getUsers, signupUser, loginUser, deleteUserById } = usersController();
  const router = Router();

  router.post("/signup", signupUser);
  router.post("/login", loginUser);
  router.delete("/delete", isUserLogged, deleteUserById);
  router.get("/getAllUsers", getUsers);
  return router;
}
