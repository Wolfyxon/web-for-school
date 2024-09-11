/*
    Jak wyżej napisz funkcję sumator. 
    Do funkcji można przekazać dowolną liczbę argumentów. 
    Skorzystaj z tzw. rest parametr. 
    Funkcja w miejscu wywołania ma zwracać podane argumenty i ich sumę. 
*/

/**
 * @param {...number} parametry
 */
function sumator() {
    let sum = 0;

    for(const arg of arguments) {
        sum += arg;
    }

    return {
        suma: sum,
        parametry: arguments
    }
}

console.log( sumator(5, 1, 9, 7, 6) );