const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    Name: {type: String, require: true },
    Imagen: {type: String, require: true },
    Price: {type: Number, require: true },
    category: {
        type:String, 
        require: true, 
        enum: [
            "accion", 
            "aventura", 
            "conduccion", 
            "deporte", 
            "estrategia", 
            "simulacion",
        ],
    },
}, {
    timestamps: true,
    collection: "games"
});

const Game = mongoose.model("games", gameSchema, "games");
module.exports = Game;