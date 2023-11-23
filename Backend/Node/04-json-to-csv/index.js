const fs = require("fs");
const path = require("path");

const JSON_FILE = "house-listings.json";
const CSV_FILE = "house-listings.csv";
const READ_PATHNAME = path.join(__dirname, "files", `${JSON_FILE}`);
const WRITE_PATHNAME = path.join(__dirname, "files", `${CSV_FILE}`);

const main = () => {
  fs.readFile(READ_PATHNAME, (err, fileContent) => {
    if (err) {
      throw err;
    }
    const data = JSON.parse(fileContent);
    const headerColumns = Object.keys(data[0]);
    let values = "\n";

    for (let i = 0; i < data.length; i++) {
      const valuesColumns = Object.values(data[i]);
      for (let j = 0; j < valuesColumns.length; j++) {
        if (Array.isArray(valuesColumns[j])) {
          values += `"${valuesColumns[j].flat(Infinity)}",`;
        } else {
          values += `"${valuesColumns[j]}",`;
        }
      }
      values += "\n";
    }
    values = values.slice(0, values.length - 1);

    let csvContent = "";
    csvContent += headerColumns.join(",");
    csvContent += values;

    fs.writeFile(WRITE_PATHNAME, csvContent, (err) => {
      if (err) throw err;
      console.log("CSV file write successful");
    });
  });
};

main();

// const main = async () => {
//   const fileContent = await fs.readFile(PATHNAME);

//   const data = JSON.parse(fileContent);
//   const headerColumns = Object.keys(data[0]);
//   let csvContent = "";
//   csvContent += headerColumns.join(",");

//   console.log(csvContent);
// };

// main();
