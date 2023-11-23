const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose
  .connect("mongodb://localhost:27017/fullstack")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
