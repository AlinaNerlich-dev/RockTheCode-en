const express = require("express");

const router = express.Router();
const app = express();

router.get("/ping", (req, res) => {
  res.status(200).json({ data: "Pong!" });
});

router.get("/ding", (req, res) => {
  res.status(200).json({ data: "dong!" });
});

app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({ data: "Not Found" });
});
// this is a comment
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
