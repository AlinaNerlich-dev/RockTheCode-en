const { Student } = require("./students");
// Fake Data
let students = [{ name: "Kimberly" }, { name: "Mark" }, { name: "Nick" }];

const clearAndInsertData = async () => {
  await Student.collection.drop();
  await Student.insertMany(students);
};

module.exports = { clearAndInsertData };
