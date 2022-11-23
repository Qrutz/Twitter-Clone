const Post = require("../../models/Post/Post.mongo");
const User = require("../../models/User/User.mongo");
const Comment = require("../../models/Comment/Comment.mongo");
const {convertIDtoUsername} = require('../../models/User/User.model');

async function createPost(req, res) {
    const {content} = req.body;
    const username = req.user.user.username;
   
    try {
        let user = await User.findOne({username: username});
        let postedBy = user._id;
       
        

        const newPost = new Post({
            content,
            postedBy: postedBy,
            postedByUserData: {
                username: user.username,
                name: user.name,
                avatar: user.avatar,
            },

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

        posts.reverse();
        res.json(posts);
    } catch (e) {
        console.log(e); 
        res.status(500).json({ message: "Server error" });
    }
}
async function getFeed(req, res) {
    const username = req.user.user.username;
    try {
        let user = await User.findOne({username: username});
        let following = user.following;
        let posts = await Post.find({postedBy: {$in: following}});
        let myPosts = await Post.find({postedBy: user._id});
        posts = posts.concat(myPosts);
        posts = posts.reverse();
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}


async function getUserPosts(req, res) {
    const username = req.params.username;

    try {
        let user = await User.findOne({username: username});
        let posts = await Post.find({postedBy: user._id});
        posts.reverse();
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}


async function fetchPost(req, res) {
    const postId = req.params.postId;
    try {
        let post = await Post.findById(postId);
        res.json(post);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}

getAllCommentsFromPost = async (req, res) => {
    const postId = req.params.postId;
    try {
        let comments = await Comment.find({postId: postId});
        res.json(comments);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}

async function likePost(req, res) {
    const postId = req.params.postId;
    const username = req.user.user.username;
    try {
        let user = await User.findOne({username: username});
        let post = await Post.findById(postId);
        let likes = post.likes;
        if (!(likes.includes(user._id))) {
            await Post.findByIdAndUpdate(postId, {$push: {likes: user._id}});
            res.json({message: "Post liked"});

    }
        else {
            await Post.findByIdAndUpdate(postId, {$pull: {likes: user._id}});
            res.json({message: "Post unliked"});
            //gg
        }    

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}   








module.exports = { createPost, getMyPosts, getFeed, getUserPosts, fetchPost, likePost };



