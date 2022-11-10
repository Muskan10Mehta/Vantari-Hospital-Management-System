const mongoose  = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_URL;

const connectDB = async () => {
    await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      family: 4, 
    })
    .then(console.log("Database connected"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;