window.addEventListener("load", () => {
    const shapes = [
        {
            "name": "graniastosłup",
            "bases": [
                {
                    "name": "trójkąt",
                    "sides": ["a", "b", "h"],
                    "calc": (a, b, h) => {
                        return 0.5 * a * b * h;
                    }
                },
                {
                    "name": "czworokąt",
                    "sides": ["a", "b", "h"],
                    "calc": (a, b, h) => {
                        return a * b * h;
                    }
                },
                {
                    "name": "sześciokąt",
                    "sides": ["a", "h"],
                    "calc": (a, b, h) => {
                        return (3 * Math.sqrt(2)) / 2 * Math.pow(a, 2) * h;
                    }
                }
            ]
        },
        {
            "name": "ostrosłup",
            "bases": [
                {
                    "name": "trójkąt",
                    "sides": ["a", "b", "h"],
                    "calc": (a, b, h) => {
                        return (1 / 6) * a * b * h;
                    }
                },
                {
                    "name": "czworokąt",
                    "sides": ["a", "b", "h"],
                    "calc": (a, b, h) => {
                        return (1 / 3) * a * b * h;
                    }
                },
                {
                    "name": "sześciokąt",
                    "sides": ["a", "h"],
                    "calc": (a, b, h) => {
                        return (1 / 3) * (3 * Math.sqrt(3)) / 2 * Math.pow(a, 2) * h;
                    }
                }
            ]
        },
        {
            "name": "stożek",
            "bases": [
                {
                    "name": "*",
                    "sides": ["h", "r"],
                    "calc": (a, b, h, r) => {
                        return (1 / 3) * Math.PI * Math.pow(r, 2) * h;
                    }
                }
            ]
        },
        {
            "name": "kula",
            "bases": [
                {
                    "name": "*",
                    "sides": ["r"],
                    "calc": (a, b, h, r) => {
                        return (4 / 3) * Math.PI * Math.pow(r, 33);
                    }
                }
            ]
        },
        {
            "name": "walec",
            "bases": [
                {
                    "name": "*",
                    "sides": ["r"],
                    "calc": (a, b, h, r) => {
                        return Math.PI * Math.pow(r, 2) * h;
                    }
                }
            ]
        }
    ]

    const form = document.getElementById("form");
    const shapeDropdown = document.getElementById("shape");
    const baseDropdown = document.getElementById("base");
    const data = document.getElementById("data");
    const result = document.getElementById("volume");

    function getShape(name) {
        for(const shape of shapes) {
            if (shape.name == name) return shape;
        }
    }

    function getBase(shape, name) {
        for(const base of shape.bases) {
            if(base.name == name) return base;
        }
    }

    function getSelectedShape() {
        return getShape(shapeDropdown.value);
    }

    function getSelectedBase() {
        return getBase(getSelectedShape(), baseDropdown.value);
    }

    function updateBases() {
        baseDropdown.innerHTML = "";

        for(const base of getSelectedShape().bases) {
            const opt = document.createElement("option");
            opt.innerText = base.name;
    
            baseDropdown.append(opt);
        }

        updateBaseInputs();
    }

    function updateBaseInputs() {
        const frag = document.createDocumentFragment();
        
        data.innerHTML = "";

        const base = getSelectedBase();

        for(const side of base.sides) {
            const div = document.createElement("div");

            const lbl = document.createElement("label");
            lbl.innerText = side + ": ";
            lbl.for = side;

            const inp = document.createElement("input");
            inp.type = "number";
            inp.id = side;

            div.append(lbl, inp);
            frag.append(div);
        }

        data.append(frag);
    }

    for(const shape of shapes) {
        const opt = document.createElement("option");
        opt.innerText = shape.name;

        shapeDropdown.append(opt);
    }

    updateBases();

    shapeDropdown.addEventListener("input", updateBases);
    baseDropdown.addEventListener("input", updateBaseInputs);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const shape = getSelectedShape();

        const aInput = document.getElementById("a");
        const bInput = document.getElementById("b");
        const hInput = document.getElementById("h");
        const rInput = document.getElementById("r");

        let fail = false;

        function check(inp) {
            if(!inp) return;

            if(!parseFloat(inp.value)) {
                inp.placeholder = "Nie podałes wartości";
                fail = true;
            }
        }

        check(aInput);
        check(bInput);
        check(hInput);
        check(rInput);
        
        if(fail) return;

        const base = getSelectedBase()
        const volume = base.calc(aInput?.value, bInput?.value, hInput?.value, rInput?.value);
        result.innerText = `Objętość: ${volume}`;
    });

});