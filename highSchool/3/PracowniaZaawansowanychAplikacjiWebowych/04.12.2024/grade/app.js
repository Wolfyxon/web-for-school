const fs = require("fs");
const path = require("path");

const dir = "ksiegarnia";
const file1 = "book1.txt";
const file2 = "book2.txt";
const file2Copy = path.join(dir, file2); 

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
    
    if(await fs.existsSync(file2Copy)) {
        return console.log(`Plik ${file2Copy} już istnieje`);
    }
    
    await fs.copyFileSync(file2, file2Copy);
    console.log(`Skopiowano ${file2} -> ${file2Copy}`);

    
}

main();