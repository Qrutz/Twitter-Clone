const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    avatar: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/1160/1160040.png"
    },
    followers: {   
        type: mongoose.Types.ObjectId, ref: "User",
        default: null
    },
    following: {
        type: mongoose.Types.ObjectId, ref: "User",
        default:null
    },
    bio: {
        type: String,
        default: "No bio"
    },
});


module.exports = mongoose.model('User', UserSchema);
