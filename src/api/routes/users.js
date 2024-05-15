const { getUsers, registerUser } = require("../controllers/users");
const usersRoutes = require("express").Router();

usersRoutes.get("/", getUsers);
usersRoutes.post("/register", registerUser);


module.exports = usersRoutes;