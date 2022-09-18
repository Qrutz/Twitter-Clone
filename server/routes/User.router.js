const UserRouter = require('express').Router();
const { registerUser, logInUser, getMyProfile, followUser, unfollowUser  } = require('../controllers/User/User.controller');
const { verifyToken } = require('../middleware/auth');



UserRouter.post('/register', registerUser);
UserRouter.post('/login', logInUser);
UserRouter.get('/me', verifyToken, getMyProfile);
UserRouter.put('/follow', verifyToken, followUser);
UserRouter.put('/unfollow', verifyToken, unfollowUser);






module.exports = UserRouter;