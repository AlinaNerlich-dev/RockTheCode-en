const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database!");
  } catch (err) {
    console.log("Error connecting with the database");
  }
};

module.exports = connectDB;
