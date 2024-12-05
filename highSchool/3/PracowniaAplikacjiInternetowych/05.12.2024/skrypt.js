window.addEventListener("load", () => {
    const table = document.getElementById("table");

    function addRow(name, description) {
        const tr = document.createElement("tr");
        
        let property = name;

        if(String.prototype[property]) {
            property += "()";
        }

        const code = `"Ala ma kota".${property}`;

        tr.innerHTML = `
            <td>string.${property}</td>
            <td>${description}</td>
            <td>${code}</td>
            <td>${eval(code)}</td>
        `;

        table.append(tr);
    }

    addRow("toLowerCase", "Zamienia wszystkie litery w ciagu znaków na małe");
    addRow("toUpperCase", "Zamienia wszystkie litery w ciagu znaków na duże");
    addRow("length", "Długość ciągu znaków");
});