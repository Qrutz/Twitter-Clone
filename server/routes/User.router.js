const UserRouter = require('express').Router();
const { registerUser, logInUser } = require('../controllers/User/User.controller');



UserRouter.post('/register', registerUser);
UserRouter.post('/login', logInUser);



module.exports = UserRouter;