import { usersController } from "./usersController.js";


export function usersRoutes(router, model) {
  const { getUsers, signupUser } = usersController(model);
    
  router.post("/signup", signupUser);
  router.get("/getAllUsers", getUsers);
}
