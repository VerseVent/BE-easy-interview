import { users } from "../../../models/index.js";
import { throwError } from "../../helpers/throwError.js";

export function usersRepo() {
  async function createUser(username, password) {
    const oldUser = await findByUsername(username);

    if (oldUser) throwError("User already exists. Please login", 400);

    return users.create({ username, password, roles_id: 2 });
  }

  async function findByUsername(username) {
    const user = await users.findOne({
      where: { username },
    });
    return user;
  }

  //CANDIDATE CREATION

  // const res2 = await candidates.create({
  //   position: "testPos",
  //   username,
  //   linkedin_url: "testLinkedin",
  //   feedback: "",
  //   avatar_url: "test_url",
  //   users_id: 1,
  // });

  //CATEGORY CREATION

  // const res3 = await question_categories.create({
  //   title: "testTitle",
  // });

  //QUESTION CREATION

  // const res = await questions.create({
  //   position: "testPos",
  //   username,
  //   max_point: 5,
  //   question: "testQuestion",
  //   answer: "testAnswer",
  //   users_id: 1,
  //   question_categories_id: 1,
  // });

  //     const res = await questions.findOne({
  //       include: [{ all: true, nested: true }],
  //       // raw: true,

  //       // nest: true,
  //     });

  //     console.log("Question: ", res.question_category.title);
  //     // console.log("Be patient: ", res[0]?.role);
  //     // const res = 123;
  //     // console.log(res);
  //     return res;
  //   }
  //   return { createUser };
  return { createUser, findByUsername };
}
