const fs = require("fs");
const path = require("path");

const dir = "ksiegarnia";

const file1 = "book1.txt";
const file1Copy = path.join(dir, file1);

const file2 = "book2.txt";
const file2New = "newspaper.txt"; 

async function mkFile(path) {
    if(await fs.existsSync(path)) {
        return console.log(`Plik ${path} już istnieje`);
    }

    try {
        await fs.writeFileSync(path, "");
        console.log(`Utworzono ${path}`);
    } catch (e) {
        console.log(`Nie mozna stworzyć ${path}: ${e}`);
    }
}

async function main() {
    if(!(await fs.existsSync(dir))) {
        await fs.mkdirSync(dir);
        console.log(`Utworzono folder ${dir}`);
    }
    
    await mkFile(file1);
    await mkFile(file2)
    
    if(await fs.existsSync(file1Copy)) {
        console.log(`Plik ${file1Copy} już istnieje`);
    } else {
        await fs.copyFileSync(file1, file1Copy);
        console.log(`Skopiowano ${file1} -> ${file1Copy}`);
    }

    console.log("Jaka jest twoja ulubiona książka?:");
    
    process.stdin.on("data", (buf) => {
        process.stdin.pause();
        console.log(">", buf.toString().trimEnd());
    });
}

main();