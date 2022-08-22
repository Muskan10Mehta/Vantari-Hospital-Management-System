const express = require("express");
const app = express();
const connectDB = require("./config/db");
const port = 3001;

app.use(express.json());
connectDB();

app.listen(port, () =>
  console.log('app listening on port ' + port),
);