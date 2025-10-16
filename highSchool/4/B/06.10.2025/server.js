const { Server } = require('socket.io');
const express = require('express');

const SOCKET_PORT = 2137;
const HTTP_PORT = 3000;

const app = express();
const io = new Server({
    cors: {
        origin: '*',
    }
});

io.on("sonnection", (client) => {
    console.log("New connection");
    
    client.on('event', (data) => {
        console.log(data);
    });
});

app.use(express.static("."));

io.listen(SOCKET_PORT);
app.listen(HTTP_PORT);
