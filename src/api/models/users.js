const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, require: true },
    imagen: {type: String, require: true },
    price: {type: Number, require: true },
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
    collection: "users"
});

const User = mongoose.model("users", userSchema, "users");
module.exports = User;