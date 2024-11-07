window.addEventListener("load", () => {
    const form = document.getElementById("form");
    const optionContainer = document.getElementById("img-options");
    const imgContainer = document.getElementById("imgs");

    const options = {};

    function addImg(id) {
        const chk = document.createElement("input");
        chk.type = "checkbox";
        chk.id = "chk-img-" + id;

        const lbl = document.createElement("label");
        lbl.innerText = "Zdjęcie " + id;

        function updateSelf() {
            options[id] = chk.checked;
        }

        chk.addEventListener("click", updateSelf);
        updateSelf();

        optionContainer.append(chk, lbl);
    }

    function update() {
        let html = "";

        for(const e of Object.entries(options)) {
            if(e[1]) {
                html += `<img src="img/${e[0]}.jpg">`;
            }
        }

        imgContainer.innerHTML = html;
    }

    for(let i = 0; i < 4; i++) {
        addImg(i + 1);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        update();
    });

    update();
});