"use strict";
import { config } from "../config/dev.js";

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
  });
}
