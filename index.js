"use strict";
// chạy app express
const express = require("express");
const app = express();
//const rootRouter = require("./src/routers");
//app.use("/api/v1", rootRouter);




const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

