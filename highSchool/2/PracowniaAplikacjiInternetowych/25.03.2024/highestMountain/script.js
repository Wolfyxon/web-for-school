/*
Utwórz listę select z nazwami pasm górskich, wybranie danego pasma ma wyswietlać nazwę i wysokość najwyższego szczytu.
*/

window.addEventListener("load", () => {
    const dropdown = document.getElementById("dropdown");
    const resultContainer = document.getElementById("result-container");
    const mtHeight = document.getElementById("height");
    const mtName = document.getElementById("name");

    let heights = {}

    /**
     @param {String} range
     @param {String} mountain
     @param {number} height
     */
    function registerMountain(range, mountain, height) {
        heights[range] = {
            "mountain": mountain,
            "height": height,
        };

        const option = document.createElement("option");
        option.innerText = range;
        option.value = range;

        dropdown.appendChild(option);
    }

    registerMountain("Tatry", "Rysy", 2499);
    registerMountain("Karkonosze", "Śnieżka", 1603);
    registerMountain("Beskidy", "Howerla", 2061);

    dropdown.addEventListener("change", () => {
        const data = heights[dropdown.value]

        if(data) {
            resultContainer.style.display = "";
            mtName.innerText = data.mountain;
            mtHeight.innerText = data.height;

        } else {
            resultContainer.style.display = "none";
        }
    });

});