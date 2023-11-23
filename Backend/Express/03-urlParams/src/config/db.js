const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_ATLAS_URL)
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
