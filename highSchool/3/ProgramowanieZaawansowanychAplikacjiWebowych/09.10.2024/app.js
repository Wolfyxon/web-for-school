const { Product } = require("./product.js");

const { laptopy } = require("./laptopy.js")
const { tvs } = require("./tv.js")
const { lodowki } = require("./lodowki.js");

/**
 * @param {Product} products 
 * @param {string} name 
 */
async function printProducts(products, name) {
    console.log("--==", name, "==--");

    for(const prod of products) {
        await prod.print();
    }
}

async function main() {
    await printProducts(tvs, "Telewizory");
    await printProducts(laptopy, "Laptopy");
    await printProducts(lodowki, "Lodówki");
}

main();