//import seed data
const mongoose = require("mongoose");
const {
  clearCollections,
  seedUsers,
  seedProducts,
  addProductsToUsers,
} = require("./db-functions");
const connectDB = require("./db");

//connect to database
connectDB();

//main function & logic
const main = async () => {
  try {
    await clearCollections();
    const users = await seedUsers();
    const products = await seedProducts(users);
    await addProductsToUsers(users, products);

    console.log("Successfully seeded data!");
  } catch (err) {
    console.error("Error seeding data", err);
  } finally {
    mongoose.disconnect();
  }
};

main();
