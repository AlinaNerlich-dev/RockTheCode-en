require("dotenv").config(); // before everything
const express = require("express");
require("./config/db");
// const routes = require("./routes");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const baseRouter = require("./routes/baseRoutes");
const studentRouter = require("./routes/studentRoutes");
const utilityRouter = require("./routes/utilityRoutes");
const authRouter = require("./routes/auth");

const { clearAndInsertData } = require("./models/student-data");

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const whitelist = ["http://localhost:3001"];
      const isAllowed = whitelist.includes(origin);
      callback(null, isAllowed);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.use((_req, res, next) => {
  res.header({
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  next();
});
app.disable("x-powered-by");

clearAndInsertData();

app.use("/students", studentRouter);
app.use("/utilities", utilityRouter);
app.use("/auth", authRouter);
app.use("/", baseRouter);

// GENERAL ERROR HANDLING
app.use("*", (req, res) => {
  res.status(404).send("404 Page Not Found");
});
app.use((error, req, res, next) => {
  res.status(500).json({ data: "Internal Server Error" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
