/* 
Napisz program, który obliczy pole trójkąta na podstawie podanych długości trzech boków a, b, c 
(ale tylko pod warunkiem, że z tych boków można stworzyć trójkąt - jeśli trójkąta nie można utworzyć, 
to program zamiast dokonać obliczeń wypisze tekst: Z podanych boków nie sposób utworzyć trójkąta!
*/

function ask(sideName) {
    return parseFloat( prompt(`Podaj bok ${sideName}`) );
}

const a = ask("a");
const b = ask("b");
const c = ask("c");

const semi = (a + b + c) / 2;

if(a + b > c && a + c > b && b + c > a) {
    console.log(`Pole: ${  Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c)) }`);
} else {
    console.error(" Z podanych boków nie sposób utworzyć trójkąta!");
}

