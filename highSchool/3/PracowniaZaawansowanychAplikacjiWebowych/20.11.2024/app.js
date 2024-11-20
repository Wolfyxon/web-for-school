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

let dirStart;
let fileStart;

let dirFinal;
let fileFinal;


async function mkDir() {
    dirStart = await input("Podaj początkową nazwę folderu");
    
    try {
        fs.mkdirSync(dirStart);
    } catch {
        console.log("Nie można utworzyć folderu.");
        await mkDir();
    }
}

async function mkFile() {
    fileStart = await input("Podaj nazwę pliku");
    
    try {
        fs.writeFileSync(dirStart + "/" + fileStart, await input("Podaj treść pliku"));
    } catch {
        console.log("Nie można utworzyć pliku");
        await mkFile();
    }
}

async function renameDir() {
    dirFinal = await input("Podaj nową nazwę folderu");
    
    try {
        fs.renameSync(dirStart, dirFinal);
    } catch {
        console.log("Nie można zmienić nazwy");
        await renameDir();
    }
}

async function renameFile() {
    fileFinal = await input("Podaj nową nazwę pliku");
    
    try {
        fs.renameSync(dirFinal + "/" + fileStart, dirFinal + "/" + fileFinal);
    } catch {
        console.log("Nie można zmienić nazwy");
        await renameFile();
    }
}

async function main() {
    await mkDir();
    await mkFile();
    await renameDir();
    await renameFile();
}

main();