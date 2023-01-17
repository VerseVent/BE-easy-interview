'use strict';

require('dotenv').config()
const express = require('express');
// Constants
const PORT = process.env.EXPRESS_PORT;
const HOST = process.env.EXPRESS_HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});