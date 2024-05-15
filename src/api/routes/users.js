const { isAuth } = require("../../middlewares/auth");
const { getUsers, registerUser, loginUser } = require("../controllers/users");
const usersRoutes = require("express").Router();

usersRoutes.get("/",(isAuth), getUsers);
usersRoutes.post("/register", registerUser);
usersRoutes.post("/login", loginUser);


module.exports = usersRoutes;