const { Server } = require('socket.io');
const { createServer } = require("node:http");
const express = require('express');

const PORT = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on("connection", (client) => {
    console.log("New connection");
    
    client.on('event', (data) => {
        console.log(data);
    });
});

app.use(express.static("."));
server.listen(PORT);