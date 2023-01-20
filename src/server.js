"use strict";
import { config } from "../config/dev.js";
// import { DbConnection } from "./db/connection.js";
// import { createModels } from "./service/createModels.js";

export function startServer(app) {
  // Constants
  const PORT = config.EXPRESS_PORT;
  const HOST = config.EXPRESS_HOST;

  // App
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.listen(PORT, HOST, async () => {
    console.log(`Running on http://${HOST}:${PORT}`);
    // const sequelizeInstance =  await DbConnection.getInstance();
    // let dbInstance = new DbConnection();
    // await dbInstance.healthCheck();
    // await sequelizeInstance.sync({ force: false });
  
  });

}
