const express = require('express'); 
const http = require('http');
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const {Server} = require('socket.io');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;


const PORT =  process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
})





// let users = [];

// const addUser = (userId, socketId) => {
//     !users.some((user) => user.userId === userId) &&
//         users.push({ userId, socketId });
// };

// io.of("/messages").on('connection', (socket) => {
//     console.log('a user connected');


//     socket.on("addUser", (data) => {
//         addUser(data, socket.id);
//         io.of("/messages").emit("getUsers", users);
//     })




//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
    
// });








async function startServer() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,        
            
        });
        console.log('MongoDB connected');    

        
        server.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`);
        });
    } catch (e) {
        console.log(e);
    }
}

//f
startServer();