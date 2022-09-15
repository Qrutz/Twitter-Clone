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
        type: mongoose.Types.ObjectId, ref: "User",
        default: null
    }
});


module.exports = mongoose.model('Post', PostSchema);
