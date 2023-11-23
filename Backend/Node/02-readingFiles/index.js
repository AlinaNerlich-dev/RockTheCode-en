const fs = require("fs");
const path = require("path");

// SYNCHRONOUS READING
// function readData() {
//   const data = fs.readFileSync("./files/text.txt", "utf8");
//   console.log(data);
// }

// console.log("before reading");
// readData();
// console.log("after reading");

// ASYNCHRONOUS READING
// console.log("before reading");
const filePath = path.join(__dirname, "files", "text.txt");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
// console.log("after reading");
