window.addEventListener("load", () => {
    const table = document.getElementById("table");

    function addRow(name, description, args) {
        const tr = document.createElement("tr");
        
        let property = name;
        let code = `"Ala ma kota".${property}`

        if(String.prototype[property]) {
            argStr = "";

            if(args) {
                for(let i = 0; i < args.length; i++) {
                    argStr += args[i];

                    if(i < args.length - 1) {
                        argStr += ", ";
                    }
                }
            }

            property += "()";
            code += `(${argStr})`;
        }

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
    addRow("indexOf", "Zwraca pierwszy indeks na którym znajduje się dany znak, lub -1 gdy nie istnieje", ["'l'"]);
    addRow("substr", "Zwraca wycinek ciągu znaków. Deprecated.", [1, 5]);
});