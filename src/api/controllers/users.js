const User = require("../models/users");

//para registrarse
const registerUser = async (req,res,next) => {
    try {
       const newUser = new User({
        userName: req.body.userName,
        password: req.body.password,
        rol: "user", //todos SERAN user automaticamente SOLO un admin puede modificarlo
        imagen: req.body.imagen,
        email: req.body.email,
    });
       const userSaved = await newUser.save();
       return res.status(201).json(userSaved);
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

module.exports = {getUsers, registerUser}