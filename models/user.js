const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    userID: String,
    experience: {
        "type": Number,
        "default": 0
    },
    level: {
        "type": Number,
        "default": 0
    },
    balance: {
        "type": Number,
        "default": 0
    },
    daily: {
        "type": Date,
        "default": 0
    },
});

module.exports = mongoose.model("User", userSchema);