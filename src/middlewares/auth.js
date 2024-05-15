const User = require("../api/models/users");
const { verifyJWT } = require("../config/jwt");

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const parsedToken = token.replace("Bearer ", "");

        const { id } = verifyJWT(parsedToken);

        const user = await User.findById(id);

        user.password = null;
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json("No estás autorizado");
    }
}

module.exports ={isAuth}