/*
Utwórz stronę wg. wzoru. 
Suwak ma umożliwiać zmianę rozmiaru div-a w zakresie od 0 do 500. 
Wartość początkowa 300. Obok suwaka ma się wyświetlać informacja o aktualnym rozmiarze div-a.
*/

window.addEventListener("load", () => {
    const slider = document.getElementById("size-input");
    const display = document.getElementById("size-display");
    const div = document.getElementById("size-div");

    function update() {
        const sz = slider.value + "px";

        div.style.width = sz;
        div.style.height = sz;

        display.innerText = sz;
    }

    slider.addEventListener("change", update);
    slider.addEventListener("mousemove", update);
    update()
});