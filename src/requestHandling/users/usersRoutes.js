import { usersController } from "./usersController.js";
import { Router } from "express";

export function usersRoutes() {
  const { getUsers, signupUser, loginUser } = usersController();
  const router = Router();

  router.post("/signup", signupUser);
  router.post("/login", loginUser);
  router.get("/getAllUsers", getUsers);
  return router;
}
