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

function sendMsg(client, author, text) {
    const msg = {
        name: author,
        text: text
    };

    logMsg(msg);
    client.emit("message", msg);
}

function logMsg(msg) {
    console.log(`${msg.name}: ${msg.text}`);
}

io.on("connection", (client) => {
    console.log("New connection");

    sendMsg(client, "Server", "hello there");
    client.on("message", logMsg);
});

app.use(express.static("."));
server.listen(PORT);