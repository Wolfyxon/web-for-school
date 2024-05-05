/*
Napisz prostą funkcję o nazwie poleKola(), 
funkcja dla podanego promienia: np. poleKola(1), ma wypisać w konsoli tekst:
 Pole koła o promieniu: 1 wynosi: 3.141592653589793. Wywołaj funkcję z argumentami 1,2,10. 
*/


/**
 * @param {number} promien 
 */
function poleKola(promien) {
    const area = Math.PI * promien ** 2;

    console.log(`Pole koła o promieniu: ${promien} wynosi: ${area}`);
}

poleKola(1);
poleKola(2);
poleKola(10);
