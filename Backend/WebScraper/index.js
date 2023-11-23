const mongoose = require("mongoose");
const puppeteer = require("puppeteer");
require("dotenv").config();

// create schema
const dataSchema = new mongoose.Schema({
  title: String,
  price: String,
});
// create model
const Data = mongoose.model("Data", dataSchema);

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (err) {
    console.error("Unable to connect to database");
  }
};

const scrapeProducts = async () => {
  await connectDB();

  const url = "https://www.amazon.com";

  const browser = await puppeteer.launch({
    headless: false, //visible browser window
    defaultViewport: null, // lets puppeteer decide browser window size. {width: 1200, height: 800}
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector("#twotabsearchtextbox");

  await page.type("#twotabsearchtextbox", "star wars");

  await page.click("#nav-search-submit-button");

  await page.waitForSelector(".s-pagination-next"); // wait for selector to become available

  const title = await page.$$eval("h2 span.a-color-base", (nodes) =>
    nodes.map((n) => n.innerText)
  );
  const price = await page.$$eval("span.a-offscreen", (nodes) =>
    nodes.map((n) => n.innerText)
  );

  const amazonProduct = title.slice(0, 5).map((value, index) => {
    return {
      title: title[index],
      price: price[index],
    };
  });

  amazonProduct.map(async (data) => {
    const product = new Data(data);
    try {
      await product.save();
      console.log(`Successfully saved ${product.title} in DB`);
    } catch (err) {
      console.log(err);
    }
  });

  await browser.close();
};

scrapeProducts();
