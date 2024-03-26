/* 
2. Napisz kod, wstawi suwak o zakresie 0 do 100 z id=suwak wartość domyślna 0. 
Pod suwakiem w div id=liczba ma się wyświetlać aktualnie ustawiona wartość.
*/

window.addEventListener("load", () => {
    const display = document.getElementById("slider-value");
    const slider = document.getElementById("slider");

    function updateValue() {
        display.innerText = slider.value;
    }
    updateValue();

    slider.addEventListener("mousemove", updateValue);
    slider.addEventListener("change", updateValue);
});