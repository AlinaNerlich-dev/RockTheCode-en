const indexRouter = require("express").Router();
const gamesRoutes = require("./games");
const platformsRoutes = require("./platforms");
const usersRoutes = require("./users");

indexRouter.use("/games", gamesRoutes);
indexRouter.use("/platforms", platformsRoutes);
indexRouter.use("/users", usersRoutes);

module.exports = indexRouter;
