/*
    Na podstawie danej tablicy osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. 
    utwórz nową tablicę osobyImiona, która będzie zawierała tylko imiona osób z tablicy osoby.
*/

const osoby = ["Jan Nowak", "Kazimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramski"];
const osobyImiona = [];

for(const v of osoby) {
    osobyImiona.push( v.split(" ")[0] );
}

console.log(osobyImiona);