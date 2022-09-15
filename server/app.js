const express = require('express');
const UserRouter = require('./routes/User.router');
const {verifyToken} = require('./middleware/auth');



const app = express();

app.use(express.json());

app.get('/welcome',verifyToken, (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.use("/api/user", UserRouter);

//craete a middleware function to check if the user is authenticated 
// app.get('/api/auth', authUser);







module.exports = app;