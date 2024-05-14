const { getGames, getGameById, getGameByCategory, getGamesByPrice, getGameByAdmin, postGame, updateGame, deleteGame } = require("../controllers/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/:id", getGameById);
gamesRouter.get("/category/:categoria", getGameByCategory);
gamesRouter.get("/precio/:precio", getGamesByPrice);
gamesRouter.get("/", getGames);
gamesRouter.post("/", postGame);
gamesRouter.put("/:id", updateGame);
gamesRouter.delete("/:id", deleteGame);





module.exports = gamesRouter;


            