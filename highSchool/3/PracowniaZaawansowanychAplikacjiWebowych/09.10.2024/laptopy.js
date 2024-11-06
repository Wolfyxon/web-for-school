const { PRODUCT_TYPE } = require("./product.js")
const { TV } = require("./tv.js");
const cena = require("./cena.js");

class Laptop extends TV {
    /**
     * @param {string} brand 
     * @param {string} name
     * @param {number} diskSize 
     * @param {number} ram 
     * @param {number} screenSize
     */
    constructor(brand, name, diskSize, ram, screenSize) {
        super(brand, name, screenSize);
        this.type = PRODUCT_TYPE.Laptop;

        this.diskSize = diskSize;
        this.ram = ram;
    }

    async print() {
        console.log(`Laptop: ${this.getPrefix()} Ekran: ${this.screenSize} RAM: ${this.ram} Pojemność: ${this.diskSize}`);
        await cena.printPrice(this);
    }
}

const laptopy = [
    new Laptop("Acer", "Nitro 5", 512, 8, 14),
    new Laptop("Lenovo", "Thinkpad", 256, 8, 7)
]

module.exports = {
    Laptop,
    laptopy
}