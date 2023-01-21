import { users } from "../../../models/index.js";
export function usersRepo() {
  async function createUser(username, password) {
    // console.log("Repo: ", await db.users.findAll());
    const res = await users.create({ username, password });
    // const res = 123;
    console.log(res);
    return res;
  }
  return { createUser };
}
