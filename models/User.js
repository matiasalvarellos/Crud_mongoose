const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name:String,
    lastName: String, 
    password: String,
    dni: {
        type: Number, 
        default: 0,

    }
})

module.exports = model("User", userSchema);