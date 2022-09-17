const PostRouter = require('express').Router();


const { createPost, getMyPosts } = require('../controllers/Post/Post.controller');
const { verifyToken } = require('../middleware/auth');

PostRouter.post('/createPost', verifyToken, createPost);
PostRouter.get('/getMyPosts', verifyToken, getMyPosts);


module.exports = PostRouter