const fs = require("fs");

const dir = "node_pliki/";

console.log(`-= Zawartość ${dir}: =-`);

for (const sub of fs.readdirSync(dir)) {
    console.log(" ", sub);
}