/*
    Zdefiniuj prostą tablicę, która będzie zawierała liczby: 'Zenek', 'Tomasz', 'Adam', 'Ewa', 'Krzysztof'. 
    Wykorzystaj fętlę for-each wypisz w div-ie tabelę, która będzie miała dwie kolumny. 
    Pierwsza będzie zawierała indeks tablicy, druga wartość umieszczoną w tablicy "pod tym indeksem”.
*/

const tbl = ["Zenek", "Tomasz", "Adam", "Ewa", "Krzysztof"];

function createTd(text) {
    const td = document.createElement("td");
    td.innerText = text;
    return td;
}

window.addEventListener("load", () => {
    const container = document.getElementById("tbl-container");
    const table = document.createElement("table");

    tbl.forEach( (val, idx, arr) => {
        const tr = document.createElement("tr");
        
        tr.appendChild( createTd(idx) );
        tr.appendChild( createTd(val) );

        table.appendChild(tr);
    });

    container.appendChild(table);
});