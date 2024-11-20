const fs = require("fs");

async function input(query) {
    return new Promise((res) => {
        process.stdout.write(query + ": ");
        process.stdin.resume();

        process.stdin.once("data", (buf) => {
            res(buf.toString().trim());
            process.stdin.pause();
        });
    });
}

async function main() {
    const dirStart = await input("Podaj początkową nazwę folderu");
    fs.mkdirSync(dirStart);

    const fileStart = await input("Podaj nazwę pliku");
    fs.writeFileSync(dirStart + "/" + fileStart, await input("Podaj treść pliku"));

    const dirFinal = await input("Podaj nową nazwę folderu");
    fs.renameSync(dirStart, dirFinal);

    const fileFinal = await input("Podaj nową nazwę pliku");
    fs.renameSync(dirFinal + "/" + fileStart, dirFinal + "/" + fileFinal);
}

main();