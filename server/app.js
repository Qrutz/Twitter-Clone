const express = require('express');
const UserRouter = require('./routes/User.router');
const PostRouter = require('./routes/Post.router');
const {verifyToken} = require('./middleware/auth');
const cors = require('cors');
const path = require('path');




const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



app.get('/welcome',verifyToken, (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.use('/api/post', PostRouter);

app.use("/api/user", UserRouter);

//craete a middleware function to check if the user is authenticated 
// app.get('/api/auth', authUser);







module.exports = app;