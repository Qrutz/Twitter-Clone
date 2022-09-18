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
        default: "https://cdna.artstation.com/p/assets/covers/images/023/309/980/large/derk-elshof-pepe-thumb.jpg?1578792928"
    },
    followers: [{   
        type: mongoose.Types.ObjectId, ref: "User",
        default: []
    }],
    following: [{
        type: mongoose.Types.ObjectId, ref: "User",
        default:[]
    
    }],
    bio: {
        type: String,
        default: "No bio"
    },
});


module.exports = mongoose.model('User', UserSchema);
