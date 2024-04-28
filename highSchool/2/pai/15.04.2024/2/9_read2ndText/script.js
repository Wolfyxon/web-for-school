/*
    Utwórz 3 akapity z tekstem. Odczytaj drugi z akapitów odwołując się do niego jak do tablicy.
*/

window.addEventListener("load", () => {
    const paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs[1].innerText)
});