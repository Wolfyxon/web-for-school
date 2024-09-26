window.addEventListener("load", () => {
    const form = document.getElementById("form");
    const xIn = document.getElementById("x");
    const yIn = document.getElementById("y");
    const result = document.getElementById("result");

    function getErrorElements() {
        return document.getElementsByClassName("error");
    }

    function reset() {
        for(const err of getErrorElements()) {
            err.remove();
        }

        xIn.style.removeProperty("backgroundColor");
        yIn.style.removeProperty("backgroundColor");
    }

    /**
     * @param {HTMLElement} element 
     * @param {string} error 
     */
    function addError(element, error) {
        const lbl = document.createElement("span");
        lbl.className = "error";
        lbl.innerText = error;

        element.style.backgroundColor = "red";

        element.parentNode.append(lbl);
        element.parentNode.insertBefore(lbl, element);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        reset();

        const x = parseFloat(xIn.value);
        const y = parseFloat(yIn.value);
        
        if(!x) addError(xIn, "Niepoprawna liczba");
        if(!y) addError(yIn, "Niepoprawna liczba");

        if(getErrorElements().length !== 0) return;

        xIn.style.backgroundColor = "green";
        yIn.style.backgroundColor = "green";
        
        result.value = x * y;
    });
});