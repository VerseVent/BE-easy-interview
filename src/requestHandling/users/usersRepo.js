import { users, candidates } from "../../../models/index.js";
export function usersRepo() {
  async function createUser(username, password) {
    // console.log("Repo: ", await db.users.findAll());
    // const res = await candidates.findAll({
    // include: [{ model: users }],
    // });
    const res = await users.findAll({
      include: [{ all: true, nested: true }],
      // raw: true,

      // nest: true,
    });
    // const res = await users.create({ username, password, roles_id:2 });
    // const res = await candidates.create({
    //   position: "testPos",
    //   username,
    //   linkedin_url: "testLinkedin",
    //   feedback: "",
    //   avatar_url: "test_url",
    //   user_id: 1,
    // });
    // console.log(res);
    console.log("Be patient: ", res[0].role);
    // const res = 123;
    // console.log(res);
    return res;
  }
  return { createUser };
}
