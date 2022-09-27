const Comment = require('../../models/Comment/Comment.mongo');
const User = require('../../models/User/User.mongo');
const Post = require('../../models/Post/Post.mongo');

async function createComment(req, res) {
    
    const username = req.user.user.username;
    const postId = req.params.postid;
    const { content } = req.body;
    
    try {
        let user = await User.findOne({username: username});
        let post = await Post.findOne({_id: postId});
        let postedBy = user._id;



        const newComment = new Comment({
            content,
            postedBy: postedBy,
            postId,
            postedByUserData: {
                username: user.username,
                name: user.name,
                avatar: user.avatar,
            },
        });
        await newComment.save();

        post.comments.push(newComment._id);
        await post.save();
        
        res.status(201).json({ message: "Comment created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}


async function getComments(req, res) {
    const postId = req.params.postid;
    try {
        let comments = await Comment.find({postId: postId});
        comments.reverse();
        res.json(comments);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}



module.exports = {
    createComment,
    getComments,
};

