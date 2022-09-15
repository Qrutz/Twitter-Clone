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
        default: 0,
    }
});


module.exports = mongoose.model('Post', PostSchema);
