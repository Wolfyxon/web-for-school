const {Product, PRODUCT_TYPE} = require("./product.js")
const cena = require("./cena.js");

class TV extends Product {
    /**
     * @param {string} brand 
     * @param {string} name  
     * @param {number} screenSize 
     */
    constructor(brand, name, screenSize) {
        super(brand, name, PRODUCT_TYPE.TV);
        this.screenSize = screenSize;
    }

    async print() {
        console.log(`Telewizor: ${this.getPrefix()} Ekran: ${this.screenSize}`);
        await cena.printPrice(this);
    }
}

module.exports = {
    TV,
    tvs: [
        new TV("LG", "Epic", 20),
        new TV("Smasnug", "Real", 25)
    ]
};