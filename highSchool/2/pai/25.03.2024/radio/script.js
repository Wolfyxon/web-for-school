/*
Wstaw trzy elementy typu radio, mają przypisane odpowiednio wartości 200, 300, 500. 
Wybranie, którejś z opcji, wyświetla jej wartość w div-ie poniżej (patrz zrzut poniżej).
*/

window.addEventListener("load", () => {
    const options = document.getElementById("options");
    const result = document.getElementById("result");

    function registerOption(value) {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = value;
        radio.name = "num";

        const lbl = document.createElement("label");
        lbl.for = value;
        lbl.innerText = value;

        options.appendChild(radio);
        options.appendChild(lbl);
    }

    registerOption(200);
    registerOption(300);
    registerOption(500);

    options.addEventListener("change", () => {
        result.innerText = document.querySelector('input[type="radio"]:checked').id;
    });
});