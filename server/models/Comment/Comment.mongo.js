const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        //max length 260 characters
        maxlength: 260,
    },
    postedBy: { 
        type: mongoose.Types.ObjectId, ref: "User",
        required: true,
    },
    postedByUserData: {
        username: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },

    },
    
    postId: {
        type: mongoose.Types.ObjectId, ref: "Post",
        required: true,
    },
    likes: 0,
    likedBy: [{
        type: mongoose.Types.ObjectId, ref: "User",
        default: []
    }],
    replies: [{
        type: mongoose.Types.ObjectId, ref: "Comment",
        default: []
    }],
    replyTo: {
        type: mongoose.Types.ObjectId, ref: "User",
        default: null,  
    },
    replyToUserData: {
        username: {
            type: String,
            default: null,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



module.exports = mongoose.model('Comment', CommentSchema);




    

            