/*
Wstaw 3 suwaki odpowiedzialne za 3 składowe koloru (patrz zrzut poniżej), zmiana położenia ma zmieniać daną składową. 
Wyświetlana ma być aktualnie zmieniana wartość. Wartości początkowe - 255 - kolor biały.
*/

window.addEventListener("load", () => {
    const currentlyChanged = document.getElementById("currently-changed");

    const inputR = document.getElementById("input-red");
    const inputG = document.getElementById("input-green");
    const inputB = document.getElementById("input-blue");
    

    function update() {
        const r = inputR.value;
        const g = inputG.value;
        const b = inputB.value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    update();

    function initSlider(slider) {

        function changed() {
            currentlyChanged.innerText = slider.value;
            update();
        }

        slider.addEventListener("change", changed);
        slider.addEventListener("mousemove", changed);
    }

    initSlider(inputR);
    initSlider(inputG);
    initSlider(inputB);
});