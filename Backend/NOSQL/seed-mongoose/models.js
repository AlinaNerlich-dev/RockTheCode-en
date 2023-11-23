const mongoose = require("mongoose");
//establish schemas
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  products: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
    },
  ],
});

const productSchema = new mongoose.Schema({
  name: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

//establish models
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = {
  User,
  Product,
};
