import express from "express";
import { usersRoutes } from "./requestHandling/users/usersRoutes.js";
import { startServer } from "./server.js";
import { handleErrors } from "./middlewares/handleErrors.js";
import { questionsRoutes } from "./requestHandling/questions/questionsRoutes.js";
import { candidatesRoutes } from "./requestHandling/candidates/candidatesRoutes.js";
import { resultsRoutes } from "./requestHandling/results/resultsRoutes.js";
// import { chalk } from "chalk";
const { errors } = require("celebrate");
const chalk = require("chalk");
const logger = console.log;

const app = express();
app.use(express.json());

startServer(app);

app.use((req, res, next) => {
  logger(
    chalk.blueBright.bold(
      `Request - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    )
  );
  res.on("finish", () => {
    logger(
      chalk.greenBright.bold(
        `Response - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      )
    );
  });
  next();
});
app.use("/users", usersRoutes());
app.use("/questions", questionsRoutes());
app.use("/candidates", candidatesRoutes());
app.use("/results", resultsRoutes());

// celebrate error handler
app.use(errors());

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use(function (err, req, res, next) {
  handleErrors(err, res);
});
