window.addEventListener("load", () => {
    const shapes = [
        {
            "name": "graniastosłup",
            "bases": [
                "trójkąt",
                "czworokąt",
                "sześciokąt"
            ]
        }
    ]

    const form = document.getElementById("form");
    const shapeDropdown = document.getElementById("shape");
    const baseDropdown = document.getElementById("base");

    function updateBases() {
        for(const opt of baseDropdown.children) {
            opt.remove();
        }

        for(const shape of shapes) {
            if(shape.name != shapeDropdown.value) continue;

            for(const base of shape.bases) {
                const opt = document.createElement("option");
                opt.innerText = base;
        
                baseDropdown.append(opt);
            }
        }
    }

    for(const shape of shapes) {
        const opt = document.createElement("option");
        opt.innerText = shape.name;

        shapeDropdown.append(opt);
    }

    updateBases();

});