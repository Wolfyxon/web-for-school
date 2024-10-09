const PRODUCT_TYPE = {
    Laptop: 0,
    Lodowka: 1,
    TV: 2
};

class Product {
    constructor(brand, name, type) {
        this.brand = brand;
        this.name = name;
        this.type = type;
    }

    /**
     * @returns {string}
     */
    getPrefix() {
        return `${this.brand} ${this.name}`;
    }
    
    async print() {
        throw "Abstract print() not implemented";
    }
}

module.exports = {Product, PRODUCT_TYPE};