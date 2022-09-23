const CommentsRouter = require('express').Router();
const { createComment, getComments } = require('../controllers/Comments/Comments.controller');
const {verifyToken} = require('../middleware/auth');

CommentsRouter.post('/createComment/:postid', verifyToken, createComment);
CommentsRouter.get('/getComments/:postid',verifyToken ,getComments);


module.exports = CommentsRouter
