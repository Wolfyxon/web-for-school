/*
    Utwórz stronę, przycisk Wstaw tekst ma powodować wyświetlenie w divie tekstu "Funkcja anonimowa". 
    Wykorzystaj funkcję anonimową. 
*/

window.addEventListener("load", () => {
    const div = document.getElementById("result");
    const btn = document.getElementById("btn-insert");

    btn.addEventListener("click", () => {
        div.innerText += "Funkcja anonimowa ";
    });
});