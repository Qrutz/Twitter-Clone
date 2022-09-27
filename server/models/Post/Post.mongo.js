const mongoose = require('mongoose');
const User = require('../User/User.mongo');


const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    postedBy: {
        type: mongoose.Types.ObjectId, ref: "User",
        required: true,
    },
    postedByUserData: [{
        username: String,
        name: String,
        avatar: String,
    }],
    
    
    likes: [{
        type: mongoose.Types.ObjectId, ref: "User",
        default: [],
    }],
    comments: [{
        type: mongoose.Types.ObjectId, ref: "Comment",
        default: [],
        
    }],
    retweets: [{
        type: mongoose.Types.ObjectId, ref: "User",
        default: [],
    }],
    date: {
        type: Date,
        // format date to be like this: 2021-01-01
        default: Date.now 
    }


});


// create a method that converts the id to a user object
PostSchema.methods.IDtoUser = async function() {
    try {
        let user = await User.findOne({_id: this.postedBy});
        return user;
    } catch (e) {
        console.log(e);
    }
}




module.exports = mongoose.model('Post', PostSchema);
