/*
Utwórz div-a 300 na 300px z czarnym obramowaniem. 
Dodaj dwa przyciski Czerwone tło Zielone tło, kliknięcie na przycisk ma zmieniać kolor div-a na dany.
*/

window.addEventListener("load", () => {
    const div = document.getElementById("color-div");

    function addBtn(text, color) {
        const btn = document.createElement("button");
        btn.innerText = text;

        btn.addEventListener("click", () => {
            div.style.backgroundColor = color;
        });

        document.body.appendChild(btn);
    }

    addBtn("Zielone tło", "green");
    addBtn("Czerwone tło", "red");
});