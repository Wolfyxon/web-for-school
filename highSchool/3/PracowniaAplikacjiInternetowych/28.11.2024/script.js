window.addEventListener("load", () => {
    const input = document.getElementById("msg-input");
    const chat = document.getElementById("chat");

    function addMsg(icon, author, text) {
        const msg = document.createElement("div");

        msg.innerHTML = `
            <img src="${icon}">
            <div class="msg-text">
                <div class="msg-sender">${author}</div>
                <div class="msg-content">${text}</div>
            </div>
        `

        chat.append(msg);
    }

    function send() {
        if(input.value.replace(" ", "") == "") return;

        addMsg("", "Ty", input.value);
        input.value = "";
    }

    input.addEventListener("keydown", (e) => {
        if(e.key == "Enter") send();
    });

    document.getElementById("send-btn", send);
});