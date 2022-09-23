const UserRouter = require('express').Router();
const { registerUser , convertIDtoUser, logInUser, getMyProfile, followUser, unfollowUser, getUserProfile, doIfollowUser  } = require('../controllers/User/User.controller');
const { verifyToken } = require('../middleware/auth');




UserRouter.post('/register', registerUser);
UserRouter.post('/login', logInUser);
UserRouter.get('/me', verifyToken, getMyProfile);
UserRouter.put('/follow/:username', verifyToken, followUser);
UserRouter.put('/unfollow/:username', verifyToken, unfollowUser);
UserRouter.get("/fetchUser/:username", verifyToken, getUserProfile);
UserRouter.get("/doIfollowUser/:username", verifyToken, doIfollowUser);
UserRouter.get("/convertIDtoUser/:id", convertIDtoUser);




module.exports = UserRouter;