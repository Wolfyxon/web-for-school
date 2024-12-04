const fs = require("fs");
const path = require("path");

const file = "copy.txt";
const dir = "dir";
const newPath = path.join(file, dir);

function assert(condition, message) {
    if(!condition) {
        console.log(message);
        process.exit(1);
    }
}

async function main() {    
    assert(await fs.existsSync(file), "Źródłowy plik nie istnieje");
    assert(await fs.existsSync(dir), "Folder docelowy nie istnieje");
    assert(!(await fs.existsSync(newPath)), "Plik już został skopiowany");
}

main();