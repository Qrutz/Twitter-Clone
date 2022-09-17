const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    postedBy: {
        type: mongoose.Types.ObjectId, ref: "User",
        required: true,
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    retweets: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }


});


module.exports = mongoose.model('Post', PostSchema);
