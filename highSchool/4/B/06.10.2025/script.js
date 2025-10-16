window.addEventListener("load", () => {
    const chat = document.getElementById("chat");
    const form = document.getElementById("input-container");
    const input = document.getElementById("chat-input");

    const socket = io("ws://localhost:2137");
    let name = "client";

    function addMsg(author, message) {
        const msg  = document.createElement("div");
        const authorElm = document.createElement("div");
        const textElm = document.createElement("div");
        
        authorElm.textContent = author;
        textElm.textContent = message;

        msg.append(authorElm, textElm);
        chat.append(msg);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        addMsg(name, input.value);
        socket.emit(input.value);
    });
});