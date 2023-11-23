// const gamesRouter = require('express').Router()  (can replace lines 1 & 5)
const express = require("express");
const {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame,
} = require("../controller/games");
const { isAuthenticated } = require("../../middlewares/auth");
const uploadFile = require("../../middlewares/uploadFile");

const gamesRoutes = express.Router();

gamesRoutes.get("/", getAllGames);
gamesRoutes.get("/:id", getGameById);
gamesRoutes.post(
  "/",
  [isAuthenticated],
  uploadFile.single("image"),
  createGame
);
gamesRoutes.put(
  "/:id",
  [isAuthenticated],
  uploadFile.single("image"),
  updateGame
);
gamesRoutes.delete("/:id", [isAuthenticated], deleteGame);

module.exports = gamesRoutes;
