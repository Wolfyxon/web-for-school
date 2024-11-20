class Component {
    constructor(html) {
        this.html = html;
    }

    getClass() {
        throw "Virtual function not implemented"
    }
}

class Value extends Component  {
    constructor(id) {
        super(`<input type="number" class="${id}" placeholder="${id}">`);
        this.id = id;
    }

    getClass() {
        return "Value";
    }
}

class X extends Component {
    constructor() {
        super("<span>x</span>")
    }

    getClass() {
        return "X";
    }
}

class Operator extends Component {
    constructor(operator, extra) {
        const map = {
            "^": `<sup>${extra}</sup>`
        }

        super(map[operator] ?? `<span>${operator}</span>`);
    }

    getClass() {
        return "Operator";
    }
}

class Function {
    constructor(name, components, callback) {
        this.name = name;
        this.components = components;
        this.callback = callback;
    }

    getValueComponents() {
        const res = [];
        
        for(const comp of this.components) {
            if(comp.getClass() == "Value") {
                res.push(comp);
            }
        }

        return res;
    }
}

const functions = [
    new Function("kwadratowa", [
        new Value("a"),
        new X(),
        new Operator("^", 2),
        new Operator("+"),
        new Value("b"),
        new X(),
        new Operator("+"),
        new Value("c")
    ], (v) => {
        const dt = v.b**2 - 4 * v.a * v.c;
        const dtSq = Math.sqrt(dt);

        return {
            "Delta": dt,
            "x1": (-v.b - dtSq) / (2 * v.a),
            "x2": (-v.b + dtSq) / (2 * v.a),

            "y": v.a * v.x**2 + v.b * v.x + v.c
        }
    }),

    new Function("liniowa", [
        new Value("a"),
        new X(),
        new Operator("+"),
        new Value("b")
    ], (v) => {
        return {
            "y": v.a * v.x + v.b
        }
    })
]

$(window).ready(() => {
    const canvas = $("canvas")[0];
    const ctx = canvas.getContext("2d");
    const range = 32;

    const formula = $("#formula");
    const funcTypeInp = $("#function-type");

    const results = $("#results");

    let currentFunc;

    function loadFunc() {
        formula.html("");

        for(const func of functions) {
            if(func.name != funcTypeInp.val()) continue;

            for(const comp of func.components) {
                const elm = $(comp.html);
                elm.val("1");
                
                function update() {
                     $("." + comp.id).val(elm.val());
                    calc();
                }

                elm.keyup(update);
                elm.change(update);

                formula.append(elm);
            }

            currentFunc = func;
            calc();
        }
    }

    function calc() {
        const values = {
            x: 0
        };

        results.html("");
        
        for(const val of currentFunc.getValueComponents()) {
            const input = $("." + val.id);
            const parsed = parseFloat(input.val());

            if(parsed == null || isNaN(parsed) || !isFinite(parsed)) return;

            values[val.id] = parsed;
        }

        const res = currentFunc.callback(values);

        for(const entry of Object.entries(res)) {
            if(isNaN(entry[1])) continue;

            const lbl = `<label>${entry[0]}</label>`;
            const input = `<input type="number" value="${entry[1]}" disabled>`;

            results.append(`<div>${lbl} ${input}</div>`);
        }

        const w = canvas.width;
        const h = canvas.height;

        ctx.clearRect(0, 0, w, h);

        for(let x = -range; x <= range; x++) {
            values.x = x;

            const y = currentFunc.callback(values).y;
            ctx.beginPath();
            
            ctx.arc(
                w / 2 + (x / range) * w,
                h / 2 + (y / range) * h,
                1, 0, Math.PI * 2
            );

            ctx.fill();
        }
    }

    for(const func of functions) {
        const opt = $(`<option>${func.name}</option>`);
        
        funcTypeInp.append(opt);
    }

    funcTypeInp.change(loadFunc);

    loadFunc();
    calc();
});