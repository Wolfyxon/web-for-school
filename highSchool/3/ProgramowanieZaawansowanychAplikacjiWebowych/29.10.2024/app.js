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
