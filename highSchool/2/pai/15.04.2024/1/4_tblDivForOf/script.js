/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. 
    Wypisz tablicę do div z id="tablica" za pomocą pętli for-of.
*/

const tbl = [5, 12, 17, 23, 123, 45, 54];
const size = 7;

window.addEventListener("load", () => {
    const outDiv = document.getElementById("tablica");

    let divTxt = "";

    for(const v of tbl) {
        divTxt += v + " ";
    }

    outDiv.innerText = divTxt;
});