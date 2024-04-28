/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. 
    Wypisz tablicę do div z id="tablicaDane" za pomocą pętli for. 
    Dane rozdziel przecinakami.
*/

const tbl = [5, 12, 17, 23, 123, 45, 54];
const size = 7;

window.addEventListener("load", () => {
    const outDiv = document.getElementById("tablicaDane");

    let divTxt = "";

    for(let i = 0; i < size; i++) {
        divTxt += tbl[i];
        if(i !== size - 1) divTxt += ", ";
    }

    outDiv.innerText = divTxt;
});