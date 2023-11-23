const express = require("express");
const router = express.Router();

// Fake Data
const students = [{ name: "Kimberly" }, { name: "Mark" }, { name: "Nick" }];

// http://localhost:3001/upper?name=Mark
router.get("/upper", (req, res) => {
  try {
    const name = req.query.name;
    console.log(name);

    const upperName = name.toUpperCase();
    res.status(200).json({ data: `Hello ${upperName}` });
  } catch (err) {
    res.status(500).json({ error: "Query parameter 'name' is mandatory" });
  }
});

// http://localhost:3001/filter?name=Mark
router.get("/students", (req, res) => {
  //   const filter = req.query.filter;
  const { filter } = req.query;

  if (filter) {
    const filteredStudent = students.filter((student) => {
      return student.name === filter;
    });
    res.status(200).json({ data: filteredStudent });
  } else {
    res.status(200).json({ data: students });
  }
});

module.exports = router;
