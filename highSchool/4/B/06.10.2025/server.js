const { Server } = require('socket.io');

const PORT = 2137;
const io = new Server();

io.on("sonnection", (client) => {
    console.log("New connection");
    
    client.on('event', (data) => {
        console.log(data);
    });
});

io.listen(PORT);
