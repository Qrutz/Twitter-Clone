const Post = require("./Post.model");


const createPost = async (req, res) => {
    const { content, postedBy } = req.body;
    try {
        const newPost = new Post({
        content,
        postedBy,
        });
        await newPost.save();
        res.status(201).json({ message: "Post created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
    }
    