const {Product, PRODUCT_TYPE} = require("./product.js")
const cena = require("./cena.js");

class Lodowka extends Product {
        /**
     * @param {string} brand 
     * @param {string} name
     * @param {number} coolingPower
     */
    constructor(brand, name, coolingPower) {
        super(brand, name, PRODUCT_TYPE.Lodowka);
        this.coolingPower = coolingPower;
    }

    async print() {
        console.log(`Lodówka: ${this.getPrefix()} Moc chłodzenia: ${this.coolingPower}`);
        await cena.printPrice(this);
    }
}

const lodowki = [
    new Lodowka("Samsung", "Cool", 2137),
    new Lodowka("Gru", "Freezeray", 999999999)
];

module.exports = {
    Lodowka,
    lodowki
};