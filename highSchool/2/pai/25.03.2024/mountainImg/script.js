/*
twórz listę select z nazwami pasm górskich i ich najwyższych, szczytów. Wybranie danego pasma ma wyswietlać zdjęcie danego pliku. Są to pliki: 
babia.jpg, rysy.jpg, sniezka.jpg i wybierz.jpg.
*/

window.addEventListener("load", () => {
    const dropdown = document.getElementById("dropdown");
    const img = document.getElementById("img");

    /**
     * @param {String} name 
     * @param {String} src 
     */
    function registerImg(name, src) {
        const option = document.createElement("option");

        option.innerText = name;
        option.value = src;

        dropdown.appendChild(option);
    }

    registerImg("Wybierz łańcuch górski", "https://www.jscwiczenia.pl/pliki/grafika/wybierz.jpg");
    registerImg("Tatry - Rysy", "https://www.jscwiczenia.pl/pliki/grafika/rysy.jpg");
    registerImg("Karkonosze - Śnieżka", "https://www.jscwiczenia.pl/pliki/grafika/sniezka.jpg");
    registerImg("Beskidy - Babia Góra", "https://www.jscwiczenia.pl/pliki/grafika/babia.jpg");

    function update() {
        img.src = dropdown.value;
    }
    update();

    dropdown.addEventListener("change", update);
});