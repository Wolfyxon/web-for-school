/*
Napisz kod, który po naciśnięciu przycisku z podpisem Pokaż. 
Przepisze wartość z pola tekstowego type="number" do div id="wynik". 
Liczbę wypisz jako nagłówek 1 stopnia. Sprawdź w konsoli typ odczytanej wartości.

Jak wyżej. Zmodyfikuj kod tak by wypisywała się 2 potęga wpisanej liczby. 
*/

window.addEventListener("load", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("wynik");

    document.getElementById("btn-show").addEventListener("click", () => {
        const val = input.value ** 2;

        const h = document.createElement("h1");
        h.innerText = val;
        output.appendChild(h);

        console.log(typeof(val));
    });
});