'use strict';
import express from "express";
import { config } from "../config/dev.js";

// Constants
const PORT = config.EXPRESS_PORT;
const HOST = config.EXPRESS_HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});