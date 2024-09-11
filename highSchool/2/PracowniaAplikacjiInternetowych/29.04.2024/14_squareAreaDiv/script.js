/*
    twórz wyrażenie funkcyjne poleKwadratu, argumentem jest bok a. 
    Funkcja ma zwracać wynik w miejscu wywołania. 
    Skorzystaj z tzw. funkcji strzałkowych. Wywołaj funkcję z argumentami 5 oraz 50, tekst wypisz do div-a wynik. 
*/

window.addEventListener("load", () => {
    const div = document.getElementById("wynik");

    /**
     * @param {number} a
     * @returns {number} 
     */
    const poleKwadratu = (a) => {
        return a ** 2;
    }

    div.innerText += poleKwadratu(5);
    div.innerText += " " + poleKwadratu(50);
    
});