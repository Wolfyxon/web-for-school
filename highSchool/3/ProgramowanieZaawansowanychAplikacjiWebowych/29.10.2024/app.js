class Operator {
    /**
     * @param {string} char 
     * @param {Operator~handler} handler 
     */
    constructor(char, handler) {
        this.char = char;
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
    new Operator("+", (a, b) => {
        return a + b;
    }),
    new Operator("-", (a, b) => {
        return a - b;
    }),
    new Operator("*", (a, b) => {
        return a * b;
    }),
    new Operator("/", (a, b) => {
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

        process.stdin.on("data", callback);
    });

}
