const express = require("express");
const routes = require("./routes");
const app = express();

// http://localhost:3000
app.use("/", routes);

// START SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
