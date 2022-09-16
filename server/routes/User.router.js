const UserRouter = require('express').Router();
const { registerUser, logInUser, getMyProfile } = require('../controllers/User/User.controller');
const { verifyToken } = require('../middleware/auth');



UserRouter.post('/register', registerUser);
UserRouter.post('/login', logInUser);
UserRouter.get('/me', verifyToken, getMyProfile);





module.exports = UserRouter;