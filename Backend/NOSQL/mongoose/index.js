const mongoose = require("mongoose");
const cars = require("./cars");
// Connect to database
mongoose
  .connect("mongodb://localhost:27017/car-app")
  .then(() => {
    console.log("Connected to database car-app");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

//   define car schema
const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  colors: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
});

const ownerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  cars: [String],
});

// create a car model based on the schema
const Car = mongoose.model("Car", carSchema);
const Owner = mongoose.model("Owner", ownerSchema);

async function main() {
  try {
    // const owner = await Owner.findOne({ lastName: "Bodenchak" }).populate({
    //   path: "cars",
    //   model: "Car",
    //   select: {
    //     _id: true,
    //     make: true,
    //     model: true,
    //   },
    // });
    // console.log(owner);

    const cars = await Car.find().populate({
      path: "owner",
      model: "Owner",
      select: {
        _id: true,
        firstName: true,
        lastName: true,
      },
    });

    console.log(cars);
  } catch (err) {
    console.log("Error", err);
  } finally {
    mongoose.disconnect();
  }
}

// HONDA ID: 64ac8ad7c1bfdcd7567bc661
// AUDI ID: 64ac8ad7c1bfdcd7567bc664
// OWNER ID: 64ac8b641754ec52a9d70672

main();
