/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. 
    Wypisz tablicę do div z id="tablicaDane" za pomocą pętli for. 
    Dane rozdziel przecinakami.
*/

const tbl = [5, 12, 17, 23, 123, 45, 54];

window.addEventListener("load", () => {
    const outDiv = document.getElementById("tablicaDane");

    let divTxt = "";

    for(let i = 0; i < tbl.length; i++) {
        divTxt += tbl[i];
        if(i !== tbl.length - 1) divTxt += ", ";
    }

    outDiv.innerText = divTxt;
});