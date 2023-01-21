"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
  });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    console.log(model);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// "use strict";
// import iconfig from "../config/config.json" assert { type: "json" };
// import { readdirSync } from "fs";
// import { fileURLToPath } from "url";
// import path, { basename as _basename, join } from "path";
// import Sequelize, { DataTypes } from "sequelize";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// import { env as _env } from "process";
// const basename = _basename(__filename);
// const env = _env.NODE_ENV || "development";
// const config = iconfig[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(_env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }
// async function setupModels() {
//   async function createModels() {
//     readdirSync(__dirname)
//       .filter((file) => {
//         return (
//           file.indexOf(".") !== 0 &&
//           file !== basename &&
//           file.slice(-3) === ".js"
//         );
//       })
//       .forEach(async (file) => {
//         let path_ = `file://${join(__dirname, file)}`;
//         const model = await import(join(path_));
//         const model_ = model.default(sequelize, DataTypes);
//         db[model_.name] = model_;
//       });
//     await createAssociations();
//   }
//   async function createAssociations() {
//     console.log(db.users);

//     Object.keys(db).forEach((modelName) => {
//       if (db[modelName].associate) {
//         db[modelName].associate(db);
//       }
//     });
//   }
//   await createModels();

//   db.sequelize = sequelize;
//   db.Sequelize = Sequelize;
// }
// setupModels();

// export default db;
