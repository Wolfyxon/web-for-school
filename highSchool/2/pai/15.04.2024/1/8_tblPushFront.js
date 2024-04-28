/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. 
    Wypisz tablicę do do konsoli. Dodaj na początku tablicy dwie liczby 7 i 77. 
    Wypisz do konsoli długość tablicy i jej bieżącą zawartość. 
*/

const tbl = [5, 12, 17, 23, 123, 45, 54];

console.log(tbl);

tbl.unshift(7, 77);

console.log(tbl.length);
console.log(tbl);