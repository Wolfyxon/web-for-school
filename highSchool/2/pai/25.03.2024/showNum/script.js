/*
Napisz kod, który po naciśnięciu przycisku z podpisem Pokaż. 
Przepisze wartość z pola tekstowego type="number" do div id="wynik". 
Liczbę wypisz jako nagłówek 1 stopnia. Sprawdź w konsoli typ odczytanej wartości.
*/

window.addEventListener("load", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("wynik");

    document.getElementById("btn-show").addEventListener("click", () => {
        const h = document.createElement("h1");
        h.innerText = input.value;
        output.appendChild(h);

        console.log(typeof(input.value));
    });
});