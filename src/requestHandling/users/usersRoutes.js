import { usersController } from "./usersController.js";


export function usersRoutes(router) {
  const { getUsers, signupUser } = usersController();
    
  router.post("/signup", signupUser);
  router.get("/getAllUsers", getUsers);
}
