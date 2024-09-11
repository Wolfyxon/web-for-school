/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. 
    Wypisz tablicę do do konsoli. Usuń z tablicy pierwszy element. Wypisz do konsoli długość tablicy i jej bieżącą zawartość. 
*/

const tbl = [5, 12, 17, 23, 123, 45, 54];

console.log(tbl);

tbl.splice(0, 1);

console.log(tbl.length);
console.log(tbl);