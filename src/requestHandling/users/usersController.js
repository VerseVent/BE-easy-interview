import { usersService } from "./usersService.js";

export function usersController() {
  const { signup } = usersService();

  function signupUser(req, res, next) {
    try {
      const user = req.body;
      console.log(user);
      signup(user);
      res.send("Signup user");
    } catch (e) {
      next(e);
    }
  }
  function getUsers(req, res, next) {
    try {
      res.send("Still users");
    } catch (e) {
      next(e);
    }
  }
  return { getUsers, signupUser };
}
