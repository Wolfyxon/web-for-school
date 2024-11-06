const { input } = require("./io.js");

async function main() {
    const name = await input("Jak się nazywasz? ");
    console.log("Witaj", name);
}

main();