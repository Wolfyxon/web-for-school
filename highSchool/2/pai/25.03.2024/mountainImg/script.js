/*
twórz listę select z nazwami pasm górskich i ich najwyższych, szczytów. Wybranie danego pasma ma wyswietlać zdjęcie danego pliku. Są to pliki: 
babia.jpg, rysy.jpg, sniezka.jpg i wybierz.jpg.
*/

window.addEventListener("load", () => {
    const dropdown = document.getElementById("dropdown");
    const img = document.getElementById("img");

    function update() {
        img.src = dropdown.value;
    }
    update();

    dropdown.addEventListener("change", update);
});