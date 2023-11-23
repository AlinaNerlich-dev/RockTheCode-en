const { register, login } = require("../controller/users");
const { isAuthenticated } = require("../../middlewares/auth");
const usersRoutes = require("express").Router();

usersRoutes.post("/register", [isAuthenticated], register);
usersRoutes.post("/login", login);

module.exports = usersRoutes;
