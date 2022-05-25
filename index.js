"use strict";
// chạy app express
const express = require("express");
const app = express();
const rootRouter = require("./src/routers");
app.use(express.json())
app.use("/api/v1", rootRouter);



const port = 3003;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

