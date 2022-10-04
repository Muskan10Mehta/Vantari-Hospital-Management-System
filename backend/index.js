const express = require("express");
const app = express();
const connectDB = require("./config/db");
const port = 3001;

const authRoute = require("./routes/auth");
const appointmentRoute = require('./routes/appointment');
// const userRoute = require("./routes/users");


// app.use("/fetch/users", userRoute);

app.use(express.json());
connectDB();
app.use("/api/auth", authRoute);
app.use("/api/appointment", appointmentRoute);

app.listen(port, () =>
  console.log('app listening on port ' + port),
);