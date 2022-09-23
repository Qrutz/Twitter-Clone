const PostRouter = require('express').Router();


const { createPost, getMyPosts, getFeed, getUserPosts } = require('../controllers/Post/Post.controller');
const { verifyToken } = require('../middleware/auth');

PostRouter.post('/createPost', verifyToken, createPost);
PostRouter.get('/getMyPosts', verifyToken, getMyPosts);
PostRouter.get('/getFeed', verifyToken, getFeed);
PostRouter.get('/getUserPosts/:username', verifyToken, getUserPosts);


module.exports = PostRouter