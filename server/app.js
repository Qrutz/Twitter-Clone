const express = require('express');
const { registerUser,logInUser, authUser } = require('./controllers/User/User.controller');




const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.post('/api/register', registerUser);
app.post('/api/login', logInUser);

//craete a middleware function to check if the user is authenticated 
// app.get('/api/auth', authUser);







module.exports = app;