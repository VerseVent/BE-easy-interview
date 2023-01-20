import { usersRepo } from "./usersRepo.js";

export function usersService() {
  const { createUser } = usersRepo();

  async function signup({ username, password }) {
    if (username.trim().length <= 3) {
      throw Error("Username is too short");
    }

    const res = await createUser(username, password);

    return res;
  }

  return { signup };
}
