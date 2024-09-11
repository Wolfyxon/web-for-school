/*
Utwórz stronę wg. wzoru. 
Suwak ma umożliwiać zmianę rozmiaru czcionki w zakresie od 0 do 250px. Wartość początkowa 14px.
*/

window.addEventListener("load", () => {
    const slider = document.getElementById("size-input");
    const num = document.getElementById("num");

    function update() {
        num.style.fontSize = slider.value + "px";
    }

    slider.addEventListener("change", update);
    slider.addEventListener("mousemove", update);
    update()
});