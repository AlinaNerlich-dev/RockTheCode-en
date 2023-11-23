const Game = require("../model/games");
const { setError } = require("../../config/error");
const { deleteFile } = require("../../middlewares/deleteFile");

//POST
const createGame = async (req, res, next) => {
  try {
    console.log(req.body);
    const newGame = new Game(req.body);

    if (req.file) {
      newGame.image = req.file.path;
    }
    const GameDB = await newGame.save();
    return res.status(201).json(GameDB);
  } catch (err) {
    return next(setError(400, err));
  }
};

//GET
const getAllGames = async (req, res, next) => {
  try {
    const allGames = await Game.find();
    return res.status(200).json(allGames);
  } catch (err) {
    // used to do console log here.
    return next(setError(400, "Can't find games"));
  }
};

//GET
const getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);

    return res.status(200).json(game);
  } catch (err) {
    return next(setError(400, "Can't find game"));
  }
};

//PUT
const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldGame = await Game.findById(id);
    const updatedGame = new Game(req.body);
    updatedGame._id = id;

    if (req.file) {
      updatedGame.image = req.file.path;
      if (oldGame.image) {
        deleteFile(oldGame.image);
      }
    }

    if (updatedGame.platforms) {
      const uniqueSet = new Set([
        ...oldGame.platforms,
        ...updatedGame.platforms,
      ]);
      updatedGame.platforms = Array.from(uniqueSet);
    }

    const gameUpdated = await Game.findByIdAndUpdate(id, updatedGame, {
      new: true,
    });

    return res.status(200).json(gameUpdated);
  } catch (err) {
    return next(setError(400, err));
  }
};

//DELETE
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await Game.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ confirmation: "Game successfully Deleted!", DeletedGame: game });
  } catch (err) {
    return next(setError(400, "Can't delete game"));
  }
};

module.exports = {
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame,
};
