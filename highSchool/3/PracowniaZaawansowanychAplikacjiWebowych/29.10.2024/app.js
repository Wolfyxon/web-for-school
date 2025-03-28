class Operator {
    /**
     * @param {string} char 
     * @param {string} name
     * @param {Operator~handler} handler 
     */
    constructor(char, name, handler) {
        this.char = char;
        this.name = name;
        this.handler = handler;
    }

    /**
     * @callback
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    handler(a, b) {
        throw "Not implemented";
    }
}

const operators = [
    new Operator("+", "dodawanie", (a, b) => {
        return a + b;
    }),
    new Operator("-", "odejmowanie", (a, b) => {
        return a - b;
    }),
    new Operator("*", "mnożenie", (a, b) => {
        return a * b;
    }),
    new Operator("/", "dzielenie", (a, b) => {
        return a / b;
    })
];

/**
 * @param {string} query
 * @returns {string}
 */
async function input(query) {

    return new Promise((res) => {
        process.stdout.write(query + ": ");

        const callback = (buf) => {
            process.stdin.removeListener("data", callback);
            process.stdin.pause();

            res(buf.toString().trim());
        };

        process.stdin.resume();
        process.stdin.on("data", callback);
    });

}

async function queryOperator() {
    return new Promise(async (res) => {
        const chr = await input("Podaj operator: ");

        for(const op of operators) {
            if(op.char == chr) {
                return res(op);
            }
        }

        console.log("Nieznany operator.");

        res(await queryOperator());
    });
}

/**
 * @param {string} name 
 * @returns {number} 
 */
async function queryFloat(name) {
    return new Promise(async (res) => {
        const str = await input(`Podaj liczbę ${name}`);
        const num = parseFloat(str);

        if(!isNaN(num)) {
            res(num);
        } else {
            console.log("Niepoprawna liczba.");
            res(await queryFloat(name));
        }
    });
}

/////////////////////////////////////////////

async function main() {
    console.log("Operatory:\n");

    for(const op of operators) {
        console.log(`   ${op.char} - ${op.name}`);
    }

    console.log();

    const op = await queryOperator();
    const a  = await queryFloat("A");
    const b  = await queryFloat("B");
    
    process.stdout.write(`Wykonywanie działania: ${op.name}\n`);
    
    const res = op.handler(a, b);
    console.log(`${a} ${op.char} ${b} = ${res}`);
}

main(); // node nie lubi awaitów w globalnym scopie