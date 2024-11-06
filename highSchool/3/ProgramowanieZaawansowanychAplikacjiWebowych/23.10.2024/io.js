async function input(query) {
    return new Promise((res) => {
        process.stdout.write(query);
        process.stdin.resume()

        process.stdin.once("data", (data) => {
            process.stdin.pause();
            res(data.toString());
        })
    });
}

module.exports = { input }