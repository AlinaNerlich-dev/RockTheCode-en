const Platform = require("../model/platforms");
const { setError } = require("../../config/error");

//POST
const createPlatform = async (req, res, next) => {
  try {
    const PlatformExists = await Platform.findOne({ name: req.body.name });
    if (PlatformExists) {
      return res.status(400).json("Platform already exists");
    } else {
      const newPlatform = new Platform(req.body);
      const PlatformDB = await newPlatform.save();
      return res.status(201).json(PlatformDB);
    }
  } catch (err) {
    return next(setError(400, err));
  }
};

//GET
const getAllPlatforms = async (req, res, next) => {
  try {
    const allPlatforms = await Platform.find().populate("games");
    return res.status(200).json(allPlatforms);
  } catch (err) {
    // used to do console log here.
    return next(setError(400, "Can't find platforms"));
  }
};

//GET
const getPlatformById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const platform = await Platform.findById(id).populate(
      "games",
      "title stock"
    );

    return res.status(200).json(platform);
  } catch (err) {
    return next(setError(400, "Can't find platform"));
  }
};

//PUT
const updatePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlatform = await Platform.findById(id);
    const updatedPlatform = new Platform(req.body);
    updatedPlatform._id = id;

    if (updatedPlatform.games) {
      const uniqueSet = new Set([
        ...oldPlatform.games,
        ...updatedPlatform.games,
      ]);
      updatedPlatform.games = Array.from(uniqueSet);
    }

    const platformUpdated = await Platform.findByIdAndUpdate(
      id,
      updatedPlatform,
      {
        new: true,
      }
    );

    return res.status(200).json(platformUpdated);
  } catch (err) {
    return next(setError(400, err));
  }
};

//DELETE
const deletePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    const platform = await Platform.findByIdAndDelete(id);
    return res.status(200).json({
      confirmation: "Platform successfully Deleted!",
      DeletedPlatform: platform,
    });
  } catch (err) {
    return next(setError(400, "Can't delete platform"));
  }
};

module.exports = {
  getAllPlatforms,
  getPlatformById,
  createPlatform,
  deletePlatform,
  updatePlatform,
};
