import { usersService } from "./usersService.js";

export function usersController() {
  const { signup, login, deleteUser } = usersService();

  async function signupUser(req, res, next) {
    try {
      const user = req.body;
      await signup(user);

      res.send("Signup user");
    } catch (e) {
      next(e);
    }
  }
  async function loginUser(req, res, next) {
    try {
      const userData = req.body;
      const { user, token } = await login(userData);

      res.json({
        user,
        token,
      });
    } catch (e) {
      next(e);
    }
  }
  async function deleteUserById(req, res, next) {
    try {
      const { id } = req.auth;
      const resMessage = await deleteUser(id);
      res.json({
        message: resMessage,
      });
    } catch (e) {
      next(e);
    }
  }
  async function getUsers(req, res, next) {
    try {
      res.send("Still users");
    } catch (e) {
      next(e);
    }
  }
  return { getUsers, signupUser, loginUser, deleteUserById };
}
