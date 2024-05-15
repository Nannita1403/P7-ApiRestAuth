const { getUsers, registerUser, loginUser } = require("../controllers/users");
const usersRoutes = require("express").Router();

usersRoutes.get("/", getUsers);
usersRoutes.post("/register", registerUser);
usersRoutes.post("/login", loginUser);


module.exports = usersRoutes;