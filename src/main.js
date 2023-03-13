import express from "express";
import { usersRoutes } from "./requestHandling/users/usersRoutes.js";
import { startServer } from "./server.js";
import { handleErrors } from "./middlewares/handleErrors.js";
import { questionsRoutes } from "./requestHandling/questions/questionsRoutes.js";
import { candidatesRoutes } from "./requestHandling/candidates/candidatesRoutes.js";
import { resultsRoutes } from "./requestHandling/results/resultsRoutes.js";
import { quizRoutes } from "./requestHandling/quiz/quizRoutes.js";
import { questionCategoriesRoutes } from "./requestHandling/questionCategories/questionCategoriesRoutes.js";
import redisClient from "./redis/redisClient";
const { errors } = require("celebrate");
const chalk = require("chalk");

const logger = console.log;

const app = express();

const cors = require("cors");

redisClient.connect();


app.use(cors());
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
app.use("/categories", questionCategoriesRoutes());
app.use("/candidates", candidatesRoutes());
app.use("/results", resultsRoutes());
app.use("/quiz", quizRoutes());

// celebrate error handler
app.use(errors());

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use(function (err, req, res, next) {
  handleErrors(err, res);
});
