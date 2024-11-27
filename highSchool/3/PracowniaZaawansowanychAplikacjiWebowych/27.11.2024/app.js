const fs = require("fs");

async function main() {
    // somehow I installed the wrong node lol
    const fs = await import("fs");
    const path = await import("path");

    const dir = "scripts";

    const move = "move.txt";
    const moveNew = path.join(dir, "move.txt");

    const rename = "rename.txt";
    const renameNew = "renamed.txt"; 
    
    if(!await fs.existsSync(dir)) {
        return console.log(`Folder ${dir} nie istnieje`);
    }

    if(await fs.existsSync(renameNew)) {
        return console.log(`Plik ${renameNew} już istnieje`);
    }

    if(await fs.existsSync(moveNew)) {
        return console.log(`Plik ${moveNew} już istnieje`);
    }

    await fs.renameSync(rename, renameNew);
    await fs.renameSync(move, moveNew);
}

main();