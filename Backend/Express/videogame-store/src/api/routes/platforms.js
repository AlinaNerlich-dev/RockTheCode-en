// const platformsRouter = require('express').Router()  (can replace lines 1 & 5)
const express = require("express");
const {
  getAllPlatforms,
  createPlatform,
  getPlatformById,
  updatePlatform,
  deletePlatform,
} = require("../controller/platforms");
const { isAuthenticated } = require("../../middlewares/auth");

const platformsRoutes = express.Router();

platformsRoutes.get("/", getAllPlatforms);
platformsRoutes.get("/:id", getPlatformById);
platformsRoutes.post("/", [isAuthenticated], createPlatform);
platformsRoutes.put("/:id", [isAuthenticated], updatePlatform);
platformsRoutes.delete("/:id", [isAuthenticated], deletePlatform);

module.exports = platformsRoutes;
