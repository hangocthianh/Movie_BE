"use strict";
// chạy app express
const express = require("express");
const { sequelize } = require('./src/models');
const path = require('path');
const { logger } = require('./src/middlewares/logger');

const app = express();
const rootRouter = require("./src/routers");
app.use(express.json())

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(logger);

app.use("/api/v1", rootRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

// test connection
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });