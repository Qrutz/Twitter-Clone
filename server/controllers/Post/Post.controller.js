const Post = require("../../models/Post/Post.mongo");
const User = require("../../models/User/User.mongo");
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
        // for each post in posts use the method IDtoUser  
       
        posts.forEach(post => {
            post.IDtoUser().then(user => { 
                // populate postedByUser field with user object 
               
                
                
                

            });
        });


       




        
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
        res.json(posts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}





module.exports = { createPost, getMyPosts, getFeed, getUserPosts };



