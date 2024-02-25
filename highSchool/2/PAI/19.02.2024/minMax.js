/* Napisz skrypt, który po wczytaniu trzech liczb znajdzie najmniejszą i największą z podanych wartości. */

const count = 3;
let nums = [];

for(let i = 0; i < count; i++) {
    nums.push( parseFloat( prompt(`Podaj ${i+1} liczbę: `) ) );
}

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num < min) min = num;
    if(num > max) max = num;
};

console.log(`Największa liczba: ${max}`);
console.log(`Najmniejsza liczba: ${min}`);
