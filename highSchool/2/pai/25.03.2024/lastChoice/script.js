window.addEventListener("load", () => {
    const options = document.getElementById("options");

    const lastContainer = document.getElementById("last-container");
    const last = document.getElementById("last");

    /**
     @param {String} name
     */
    function registerOption(name) {
        const check = document.createElement("input");
        check.type = "checkbox";
        check.id = name;

        const lbl = document.createElement("label");
        lbl.for = name;
        lbl.innerText = name;

        options.appendChild(check);
        options.appendChild(lbl);

        check.addEventListener("change", () => {
            if(check.checked) {
                lastContainer.style.display = "";
                last.innerText = name;
            }
        });
    }

    registerOption("obiad");
    registerOption("cola");
    registerOption("woda");
    registerOption("deser");
    registerOption("kawa");
});