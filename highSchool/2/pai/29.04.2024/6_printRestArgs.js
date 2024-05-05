/*
    Napisz funkcję, która wypisze w konsoli liczby podane jako argumenty - dowolną ich liczbę. Skorzystaj z tzw. rest parametr. 
*/

/**
 * @param  {...number} args 
 */
function funkcja(...args) {
    for(const arg of args) {
        console.log(arg);
    }
}

funkcja(2, 50, 13, 24);