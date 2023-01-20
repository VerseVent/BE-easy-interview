import express from "express";
import { usersRoutes } from "./requestHandling/users/usersRoutes.js";
import { startServer } from "./server.js";
import { handleErrors } from "./service/handleErrors.js";

import { Router } from "express";
import { DbConnection } from "./db/connection.js";
import { createModels } from "./service/createModels.js";

const router = Router();

const app = express();
app.use(express.json());

startServer(app);
usersRoutes(router);

app.use("/user", router);
app.use("/question", router);
app.use("/candidate", router);
app.use("/result", router);

app.use(function (err, req, res, next) {
  handleErrors(err, res);
});
