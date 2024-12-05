window.addEventListener("load", () => {
    const table = document.getElementById("table");

    function addRow(methodName, description) {
        const tr = document.createElement("tr");
        const code = `"Ala ma kota".${methodName}()`;

        tr.innerHTML = `
            <td>string.${methodName}()</td>
            <td>${description}</td>
            <td>${code}</td>
            <td>${eval(code)}</td>
        `;

        table.append(tr);
    }

    addRow("toLowerCase", "Zamienia wszystkie litery w ciagu znaków na małe");
    addRow("toUpperCase", "Zamienia wszystkie litery w ciagu znaków na duże");
    

});