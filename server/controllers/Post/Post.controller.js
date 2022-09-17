const Post = require("../../models/Post/Post.mongo");
const User = require("../../models/User/User.mongo");

async function createPost(req, res) {
    const {content} = req.body;
    const username = req.user.user.username;
   
    try {
        let user = await User.findOne({username: username});
        let postedBy = user._id;
        const newPost = new Post({
            content,
            postedBy: postedBy,   
        });

        await newPost.save();
        res.status(201).json({ message: "Post created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}


async function getMyPosts(req, res) {
    const username = req.user.user.username;
    try {
        let user = await User.findOne({username: username});
        let postedBy = user._id;
        let posts = await Post.find({postedBy: postedBy});
        res.json(posts);
    } catch (e) {
        console.log(e); 
        res.status(500).json({ message: "Server error" });
    }
}




module.exports = { createPost, getMyPosts };



