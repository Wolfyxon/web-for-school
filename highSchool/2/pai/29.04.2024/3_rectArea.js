/*
    Napisz prostą funkcję o nazwie poleProstokata(), 
    funkcja dla podanych argumentów - boki a i b. np. poleProstokata(2,5), 
    ma wypisać w konsoli tekst: Pole prostokąta o bokach: 20 i 50 wynosi: 1000. Wywołaj funkcję z argumentami 2 i 5 oraz 20 i 50. 
*/

/**
 * @param {number} a 
 * @param {number} b 
 */
function poleProstokata(a, b) {
    const area = a * b;

    console.log(`Pole prostokąta o bokach: ${a} i ${b} wynosi: ${area}`);
}

poleProstokata(2, 5);
poleProstokata(20, 50);