const seedData = require("./seed");
const { User, Product } = require("./models");
//Database Function Definitions
//clear collections
const clearCollections = async () => {
  await User.collection.drop();
  await Product.collection.drop();
};

//create users
const seedUsers = async () => {
  try {
    const users = await User.create(seedData.users);
    return users;
  } catch (err) {
    console.error("Error seeding USER data:", err);
  }
};

//create products
const seedProducts = async (users) => {
  try {
    const products = await Product.create(
      seedData.products.map((product) => ({
        name: product.name,
        user_id: users[product.userId]._id,
      }))
    );
    return products;
  } catch (err) {
    console.error("Error seeding PRODUCT data:", err);
  }
};

//load product data into user docs
const addProductsToUsers = async (users, products) => {
  try {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const userProducts = [];

      for (let j = 0; j < products.length; j++) {
        const product = products[j];

        if (String(product.user_id) === String(user._id)) {
          userProducts.push({
            _id: product._id,
            name: product.name,
          });
        }
      }
      user.products = userProducts;
      await user.save();
    }
    // **************
    // *** using MAP ***
    // **************
    // await Promise.all(
    //   users.map(async (user) => {
    //     const userProducts = await Promise.all(
    //       products
    //         .filter((product) => String(product.user_id) === String(user._id))
    //         .map(async ({ _id, name }) => {
    //           const productData = {
    //             _id,
    //             name,
    //           };
    //           return productData;
    //         })
    //     );
    //     user.products = userProducts;
    //     await user.save();
    //   })
    // );
    console.log("Added PRODUCT data to USERS");
  } catch (err) {
    console.error("Error PRODUCT data to USERS:", err);
  }
};

module.exports = {
  clearCollections,
  seedUsers,
  seedProducts,
  addProductsToUsers,
};
