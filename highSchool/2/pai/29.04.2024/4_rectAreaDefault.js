/*
    Napisz funkcję ze zdefiniowanymi wartościami domyślnymi. 
    Funkcja ma się nazywać: poleProstokata(), funkcja dla podanych argumentów - boki a i b. np. 
    poleProstokata(2,5), ma wypisać w konsoli tekst: Pole prostokąta o bokach: 20 i 50 wynosi: 1000. 
    Wywołaj funkcję z argumentami domyślnymi oraz 20 i 50. Wartości domyślne ustaw na 0. 
*/

/**
 * @param {number} a 
 * @param {number} b 
 */
function poleProstokata(a = 0, b = 0) {
    const area = a * b;

    console.log(`Pole prostokąta o bokach: ${a} i ${b} wynosi: ${area}`);
}

poleProstokata();
poleProstokata(2, 5);
poleProstokata(20, 50);