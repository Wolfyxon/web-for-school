/*
    Napisz funkcję, która wypisze w konsoli liczby podane jako argumenty - dowolną ich liczbę. Skorzystaj z właściwości arguments. 
*/

/**
 * @param {...number} parametry
 */
function funkcja() {
    for(const arg of arguments) {
        console.log(arg);
    }
}

funkcja(2, 3, 1, 4, 99, 20);