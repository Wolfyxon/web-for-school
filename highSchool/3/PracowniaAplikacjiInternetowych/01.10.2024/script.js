window.addEventListener("load", () => {
    const form = document.getElementById("form");

    const aInput = document.getElementById("a-input");
    const bInput = document.getElementById("b-input");
  
    const resInput = document.getElementById("result");

    function getSelectedCalc() {
        for(const elm of document.querySelectorAll("input[type='radio']")) {
            if(elm.checked) return elm.id;
        }
    }

    function getErrorLabels() {
        return document.getElementsByClassName("error-label");
    }

    function reset() {
        for(const err of getErrorLabels()) err.remove();

        aInput.className = "";
        bInput.className = "";
    }

    function invalid(element, message) {
        element.className = "invalid";

        const errLbl = document.createElement("label");
        errLbl.innerText = message;
        errLbl.className = "error-label";

        element.parentElement.append(errLbl);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        reset();

        const a = parseFloat(aInput.value);
        const b = parseFloat(bInput.value);
        
        if(!a) invalid(aInput, "Nie podano A");
        if(!b) invalid(bInput, "Nie podano B");

        if(getErrorLabels().length !== 0) return;

        if(getSelectedCalc() == "calc1") {
            const res = a / (a - b); 

            if(isNaN(res) || !isFinite(res)) {
                alert("Dzielenie przez 0!");
                return;
            }

            resInput.value = res;
        } else {
            resInput.value = a * b + b;
        }

        aInput.className = "valid";
        bInput.className = "valid";
    });
});