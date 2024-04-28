/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 'Zenek', 'Tomasz', 'Adam', 'Ewa', 'Krzysztof'. 
    Wykorzystaj fętlę for-each i wypisz w konsoli wszystkie argumenty funkcji wywołanej w for-each tj. element, indeks elementu, tablicę.
*/

const tbl = ["Zenek", "Tomasz", "Adam", "Ewa", "Krzysztof"];

tbl.forEach( (val, idx, arr) => {
    console.log(val, idx, arr);
});