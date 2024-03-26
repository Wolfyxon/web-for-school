/*
this, metoda .querySelectorAll(), pętla for-of

1. Napisz kod, który wyświetli trzy przyciski, podpisane jeden, dwa, trzy. 
Kliknięcie na każdy z nich ma wyświetlić napis, kliknąłeś na przycisk.
*/

window.addEventListener("load", () => {
    for (const btn of document.querySelectorAll("button")) {
        btn.addEventListener("click", () => {
            alert("Kliknąłęs na przycisk");
        });
    }
});