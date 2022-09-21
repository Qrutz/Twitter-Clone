const express = require('express'); 
const http = require('http');
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;


const PORT =  process.env.PORT || 5000;

const server = http.createServer(app);

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