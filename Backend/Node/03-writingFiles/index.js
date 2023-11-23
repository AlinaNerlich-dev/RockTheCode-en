const fs = require("fs");
const path = require("path");
const prompts = require("prompts");

const PATHNAME = path.join(__dirname, "files");

const main = async () => {
  const responses = await prompts([
    {
      type: "text",
      name: "name",
      message: "What's your name?",
    },
    {
      type: "text",
      name: "lastName",
      message: "What's your last name?",
    },
    {
      type: "number",
      name: "age",
      message: "What's your age?",
    },
  ]);
  console.log(responses);

  fs.writeFile(
    `${PATHNAME}/${responses.name}-${Date.now()}.json`,
    JSON.stringify(responses),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  console.log("File write successful!");
};

main();

//
// INTRO TO WRITING FILES
//
// const outputString = "Hello from Node!! \n";
// fs.appendFile(`${PATHNAME}/appendOutput.txt`, outputString, (err) => {
//   if (err) throw err;
// });

// fs.writeFile("./files/outputAsync.txt", outputString, (err) => {
//   if (err) throw err;
// });

// const writeFn = async () => {
//   await fs.writeFile("./files/outputAsyncNewSyntax.txt", outputString);
// };
// writeFn();

// fs.writeFileSync("./files/outputSync.txt", "Hello Again");
