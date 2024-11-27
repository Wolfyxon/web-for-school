async function main() {
    // somehow I installed the wrong node lol
    const fs = await import("fs");
    const path = await import("path");

    const move = "move.txt";
    const dir = "scripts";

    if(!await fs.existsSync(dir)) {
        return console.log(`Folder ${dir} nie istnieje`);
    }

    await fs.renameSync("rename.txt", "renamed.txt");
    await fs.renameSync(move, path.join(dir, "move.txt"));
}

main();