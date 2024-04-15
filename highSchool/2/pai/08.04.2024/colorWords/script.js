/*
    Wstaw 3 słowa w kolorze czerwonym, zielonym i niebieskim. 
    Napisz skrypt, który po kliknięciu na dane słowo będzie wyświetlał kolor, którym zostało on napisane na . 
*/

window.addEventListener("load", () => {
    for(const elm of document.querySelectorAll("p")) {
        elm.addEventListener("click", () => {
            alert(elm.style.color);
        });
    }
});