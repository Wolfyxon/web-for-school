/*
    Napisz funkcję, która wypisze w konsoli liczby podane jako argumenty - dowolną ich liczbę. Skorzystaj z tzw. rest parametr. 
*/

/**
 * @param  {...number} argumenty 
 */
function funkcja(...argumenty) {
    for(const arg of argumenty) {
        console.log(arg);
    }
}

funkcja(2, 50, 13, 24);