const {getPlatformById, getPlatforms, postPlatform, updatePlatform, deletePlatform } = require("../controllers/platforms");

const platformRouter = require("express").Router();

platformRouter.get("/:id", getPlatformById);
platformRouter.get("/", getPlatforms);
platformRouter.post("/", postPlatform);
platformRouter.put("/:id", updatePlatform);
platformRouter.delete("/:id", deletePlatform);

module.exports = platformRouter;
