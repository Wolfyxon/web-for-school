/*
    Utwórz stronę która ma czarne tło i zawiera suwak. 
    Na suwaku można ustawić wartość od 0 do 255, domyślnie 0. 
    Suwak ma umożliwiać zmianę składowej R, koloru tła strony.
*/

window.addEventListener("load", () => {
    const inputR = document.getElementById("input-red");

    function update() {
        const r = inputR.value;
        const g = 0;
        const b = 0;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${g})`
    }

    update();

    inputR.addEventListener("change", update);
    inputR.addEventListener("mousemove", update);
    
});