import {
  users,
  candidates,
  question_categories,
  questions,
  results,
} from "../../../models/index.js";
export function usersRepo() {
  async function createUser(username, password) {
    // console.log("Repo: ", await db.users.findAll());
    // const res = await candidates.findOne({
    //   include: [{ all: true, nested: true }],
    // });

    //USER FIND ONE

    // const res = await users.findOne({
    //   include: [{ all: true, nested: true }],
    //   // raw: true,

    //   // nest: true,
    // });

    //USER CREATION

    // const res = await users.create({ username, password, roles_id: 2 });

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

    const res = await questions.findOne({
      include: [{ all: true, nested: true }],
      // raw: true,

      // nest: true,
    });

    console.log("Question: ", res.question_category.title);
    // console.log("Be patient: ", res[0]?.role);
    // const res = 123;
    // console.log(res);
    return res;
  }
  return { createUser };
}
