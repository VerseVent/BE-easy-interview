import express from "express";
import { usersRoutes } from "./requestHandling/users/usersRoutes.js";
import { startServer } from "./server.js";
import { handleErrors } from "./middlewares/handleErrors.js";
import { questionsRoutes } from "./requestHandling/questions/questionsRoutes.js";
import { candidatesRoutes } from "./requestHandling/candidates/candidatesRoutes.js";
import { resultsRoutes } from "./requestHandling/results/resultsRoutes.js";

const app = express();
app.use(express.json());

startServer(app);

app.use("/users", usersRoutes());
app.use("/questions", questionsRoutes());
app.use("/candidates", candidatesRoutes());
app.use("/results", resultsRoutes());

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use(function (err, req, res, next) {
  handleErrors(err, res);
});
