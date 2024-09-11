/*
Użyj pola typu checbox. Obok pola ma być teskt Zapoznałem się z regulaminem. 
Jego zaznaczenie ma poniżej wyświetlać jako nagłówek 2 stopnia tekst Pamiętaj! Koniecznie przeczytaj nasz regulamin.
*/

window.addEventListener("load", () => {
    const check = document.getElementById("check");
    const h1 = document.getElementById("h1");

    check.addEventListener("change", () => {
        if(check.checked) {
            h1.style.display = "";
        } else {
            h1.style.display = "none";
        }
    });
});