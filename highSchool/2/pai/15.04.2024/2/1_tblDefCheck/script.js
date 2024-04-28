/*
    Sprawdź czy definicja osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"] to tablica, 
    jeśli tak wyświetl na stronie tekst: "osoby to tablica" jeśli nie: "osoby to nie tablica". 
*/

const osoby = ["Jan Nowak", "Kazimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramski"];

window.addEventListener("load", () => {
    if( Array.isArray(osoby) ) {
        document.write("osoby to tablica");
    } else {
        document.write("osoby to nie tablica");
    }
});