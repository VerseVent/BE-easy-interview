import { createCandidates } from "../models/candidates.js";
import { createQuestionCategories } from "../models/questionCategories.js";
import { createQuestions } from "../models/questions.js";
import { DataTypes } from "sequelize";
import { createResults } from "../models/results.js";
import { createRoles } from "../models/roles.js";
import { createUsers } from "../models/users.js";

export function createModels(sequelize) {
  const roles = createRoles(sequelize);
  const users = createUsers(sequelize);
  const questionCategories = createQuestionCategories(sequelize);
  const questions = createQuestions(sequelize);
  const candidates = createCandidates(sequelize);
  const results = createResults(sequelize);
  // const questionsResults = createQuestionsResults(sequelize);
  //roles relations
  roles.hasMany(users);

  //questionCategories relations
  questionCategories.hasMany(questions);

  //users relations
  users.hasMany(candidates);
  users.hasMany(questions);

  //candidates relations
  candidates.hasMany(results);

  //results relations
  const questionsResults = sequelize.define("questions_results", {
    question_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  results.belongsToMany(questions, { through: questionsResults });
  questions.belongsToMany(results, { through: questionsResults });
  return {
    roles,
    users,
    questionCategories,
    questions,
    candidates,
  };
}
