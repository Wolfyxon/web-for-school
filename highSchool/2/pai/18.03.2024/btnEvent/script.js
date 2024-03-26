/*
1. Napisz kod, który po naciśnięciu przycisku z podpisem Powitaj!. wyświetli tekst - nagłówek 1 stopnia - Witaj świecie! a sam przycisk zniknie.
*/

window.addEventListener("load", () => {
    const btn = document.getElementById("btn-welcome");
    const header = document.getElementById("welcome-header");

    btn.addEventListener("click", () => {
        btn.remove();
        header.style.display = "";
    });
});