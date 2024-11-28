const bots = [
    {
        name: "Florp",
        icon: "img/florp.jpg"
    },
    {
        name: "Gwab",
        icon: "img/gwab.jpg"
    },
    {
        name: "WepWep",
        icon: "img/wepwep.jpg"
    }
];

const responses = [
    "wab wab",
    "zip zip zip",
    "florp blop gwob gwob",
    "wawa",
    "galanga"
]

function randVal(array) {
    return array[Math.floor(Math.random() * (array.length - 1))];
}

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
        msg.scrollIntoView();
    }

    function send() {
        if(input.value.replace(" ", "") == "") return;

        addMsg("img/you.png", "Ty", input.value);
        input.value = "";

        setTimeout(() => {
            const bot = randVal(bots);
            const msg = randVal(responses);

            addMsg(bot.icon, bot.name, msg);
        }, Math.random() * 2000);
    }

    input.addEventListener("keydown", (e) => {
        if(e.key == "Enter") send();
    });

    document.getElementById("send-btn", send);
});