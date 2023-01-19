import { Sequelize } from "sequelize";
import { config } from "../../config/dev.js";

export class DbConnection {
  static getInstance() {
    if (DbConnection.instance) {
      return DbConnection.instance;
    }
    DbConnection.instance = new Sequelize(
      config.PG_DATABASE,
      config.PG_USER,
      config.PG_PASSWORD,
      {
        port: config.PG_PORT,
        logging: false,
        dialect: "postgres",
      }
    );
    return DbConnection.instance;
  }

  async healthCheck() {
    try {
      await DbConnection.getInstance().authenticate();
      console.log("Connection has been established successfully.");
    } catch (e) {
      console.log("ERROR: db connection went wrong:", e);
    }
  }
}
