window.addEventListener("load", () => {
    const chat = document.getElementById("chat");
    const form = document.getElementById("input-container");
    const input = document.getElementById("chat-input");

    const socket = io("ws://localhost:3000");

    let name = "client";

    function addMsg(author, message) {
        const msg  = document.createElement("div");
        const authorElm = document.createElement("span");
        const textElm = document.createElement("span");
        
        authorElm.textContent = author + ": ";
        textElm.textContent = message;

        msg.append(authorElm, textElm);
        chat.append(msg);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        addMsg(name, input.value);

        socket.emit("message", {
            name: name,
            text: input.value
        });
    });

    socket.on("connect", () => {
        addMsg("System", "Connected");
    });

    socket.on("message", (msg) => {
        addMsg(msg.name, msg.text);
    });

    socket.on("error", (err) => {
        addMsg("System", `Socket error: ${err}`);
    });
});