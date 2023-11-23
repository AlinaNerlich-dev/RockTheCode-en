const mongoose = require("mongoose");
// connect to database
const connectDB = async () => {
  mongoose
    .connect("mongodb://localhost:27017/mydatabase")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

module.exports = connectDB;
