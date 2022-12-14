const express = require('express');
const UserRouter = require('./routes/User.router');
const PostRouter = require('./routes/Post.router');
const CommentsRouter = require('./routes/Comments.router');
const {verifyToken} = require('./middleware/auth');
const cors = require('cors');








const app = express();

app.use(express.json());
app.use(cors());






app.get('/welcome',verifyToken, (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});




app.use('/api/post', PostRouter);

app.use("/api/user", UserRouter);

app.use("/api/comments", CommentsRouter);




// app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.get('*', function(req, res) {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });







module.exports = app;