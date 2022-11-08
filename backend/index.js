const express = require("express");
const app = express();
const connectDB = require("./config/db");
const port = 3001;
const authRoute = require("./routes/auth");
const appointmentRoute = require('./routes/appointment');
const userRoute = require("./routes/users");
const hospitalRoute = require('./routes/hospitals');
const doctorRoute = require('./routes/doctors');

app.use(express.json());
connectDB();
app.use("/api/auth", authRoute);
app.use("/api/appointment", appointmentRoute);
app.use('/api/hospital', hospitalRoute);
app.use('/api/doctor', doctorRoute);
app.use("/api/users", userRoute);

app.listen(port, () =>
  console.log('app listening on port ' + port),
);