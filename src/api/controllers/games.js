const Game = require("../models/games");

const getGames = async (req,res,next) => {
    try {
        const games = await Game.find({ verified: true });
        return res.status(200).json(games);
      } catch (error) {
        return res.status(400).json("Error en la solicitud");
      }
    };

const getGameById = async (req,res,next) => {
    try {
        const {id}= req.params;
        const game = await Game.findById(id);
        return res.status(200).json(game);
     } catch (error) {
        return res.status(400).json("Error en la solicitud");
     }
};

const getGameByCategory = async (req,res,next) => {
    try {
        const {categoria}= req.params;
        const games = await Game.findById({categoria});
        return res.status(200).json(games);
     } catch (error) {
        return res.status(400).json("Error en la solicitud");
     }
};

const getGamesByPrice = async (req, res, next) => {
    try {
      const { precio } = req.params;
      const games = await Game.find({ precio: { $lte: precio } });
      return res.status(200).json(games);
    } catch (error) {
      return res.status(400).json("Error en la solicitud");
    }
  };

const postGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);

    if (req.user.rol === "admin") {
      newGame.verified = true;
    } else {
      newGame.verified = false;
    }
    const gameSaved = await newGame.save();

    return res.status(201).json(gameSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getGameByAdmin = async (req, res, next) => {
    try {
      const games = await Game.find({ verified: false });
      return res.status(200).json(games);
    } catch (error) {
      return res.status(400).json("Error en la solicitud");
    }
  };

const updateGame = async (req, res, next) => {
    try {
      const { id } = req.params;
      const newGame = new Game(req.body);
      newGame._id = id;
      const gameUpdate = await Game.findByIdAndUpdate(id, newGame, {
        new: true,
      });
      return res.status(200).json(gameUpdate);
    } catch (error) {
      return res.status(400).json("Error en la solicitud");
    }
  };

  const deleteGame = async (req, res, next) => {
    try {
      const { id } = req.params;
      const gameDeleted = await Game.findByIdAndDelete(id);
      return res.status(200).json(gameDeleted);
    } catch (error) {
      return res.status(400).json("Error en la solicitud");
    }
  };
        module.exports = {
            getGames,
            getGameById, 
            getGameByCategory,
            getGamesByPrice,
            getGameByAdmin,
            postGame,
            updateGame,
            deleteGame
        }