/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. 
    Wypisz tablicę do do konsoli. Dodaj do tablicy 2 liczby 33 i 44. 
    Zrób to w jednej instrukcji. Wypisz do konsoli długość tablicy i zawartość tablicy. 
*/

const tbl = [5, 12, 17, 23, 123, 45, 54];

console.log(tbl);

tbl.push(33, 44);

console.log(tbl.length);
console.log(tbl);
