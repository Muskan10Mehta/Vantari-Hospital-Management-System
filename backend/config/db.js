const mongoose  = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

const uri = 'mongodb+srv://vantari2022:1910990681vantari@cluster0.xrpqnrk.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database connected"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;