/*
    Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. 
    Usuń z danych osobę: "Ewa Mocek", dodaj 2 osoby: "Maria Kapik","Elżbieta Konf". 
    W konsoli wyświetl usuniety element i tablicę po wprowadzeniu zmian. 
*/

const osoby = ["Jan Nowak", "Kazimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramski"];
const rm = "Ewa Mocek";

osoby.splice( osoby.indexOf(rm), 1 );
osoby.push("Maria Kapik", "Elżbieta Konf");

console.log(rm);
console.log(osoby);