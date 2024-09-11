/*
    a) Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"], 
    Wyświetl zawartość tablicy w konsoli, ale z powodu RODO nie chcesz wyświetlać nazwisk i imion osób, tylko zamiast nich tekst "aaa bbb".
    
    b) Masz dane: samochody=["Fiat","Skoda","Volvo","Mercedes","Kia","Opel","Citroen"], wyświetl je w konsoli, ale zamiast elementów 2,3 wyświetl słowo "tajne". 
*/


console.log("a)") //////////////////////////////////////////////////////////////////////////////

const osoby = ["Jan Nowak", "Kazimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramski"];

/**
 * @param {String} text 
 * @param {String} redactor 
 */
function redact(text, redactor) {
    let res = "";

    for(let i = 0; i < text.length; i++) {
        res += redactor;        
    }

    return res;
}

for(const person of osoby) {
    const split = person.split(" ");
    const name1 = split[0];
    const name2 = split[1];

    console.log(
        redact(name1, "a") + 
        " " +
        redact(name2, "b")
    );
    
}

console.log("b)") //////////////////////////////////////////////////////////////////////////////

const samochody = ["Fiat", "Skoda", "Volvo", "Mercedes", "Kia", "Opel", "Citroen"];
const redactedIndexes = [2, 3];

for(let i = 0; i < samochody.length; i++) {

    if(redactedIndexes.includes(i)) {
        console.log("tajne");
    } else {
        console.log(samochody[i]);
    }
    
}