const User = require("../models/users");

//para registrarse
const register = async (req,res,next) => {
    try {
       const newUser = new User(req.body);
       const userSaved = await newUser.save();
       return res.status(200).json(userSaved);
    } catch (error) {
        return res.status(400).json ("Error en el registro")
    }
}

//para que el admin pueda usarlo para ver los usuarios:
const getUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json ("Error no hay Usuarios")
    }
}

module.exports = {getUsers, register}