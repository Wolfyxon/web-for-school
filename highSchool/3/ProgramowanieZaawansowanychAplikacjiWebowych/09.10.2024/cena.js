const { Product, PRODUCT_TYPE } = require("./product.js");

class ProductTag {
    /**
     * @param {string} brand 
     * @param {string} name 
     * @param {PRODUCT_TYPE} type 
     * @param {number} price 
     */
    constructor(brand, name, type, price) {
        this.brand = brand;
        this.name = name;
        this.type = type;
        this.price = price;
    }
    
    /**
     * @param {Product} product
     * @returns {boolean}
     */
    isProduct(product) {
        return (product.name == this.name && product.brand == this.brand);
    }
}

const tags = [
    new ProductTag("LG", "Epic", PRODUCT_TYPE.TV, 3000),
    new ProductTag("Smasnug", "Real", PRODUCT_TYPE.TV, 200),
    
    new ProductTag("Acer", "Nitro 5", PRODUCT_TYPE.Laptop, 4000),
    new ProductTag("Lenovo", "Thinkpad", PRODUCT_TYPE.Laptop, 999),

    new ProductTag("Samsung", "Cool", PRODUCT_TYPE.Lodowka, 29000),
    new ProductTag("Gru", "Freezeray", PRODUCT_TYPE.Lodowka, 99999999)
];

/**
 * @param {Product} product 
 * @returns {number}
 */
function getPrice(product) {
    for(const tag of tags) {
        if(tag.isProduct(product)) {
            return tag.price;
        }
    }

    throw "No price found for product";
}

/**
 * @param {Product} product 
 */
async function printPrice(product) {
    const price = getPrice(product);

    return new Promise((res) => {
        setTimeout(function() {
            console.log("Cena:", price);
            res();
        }, 2 * 1000);
    })
}

module.exports = {
    ProductTag,
    tags,
    getPrice,
    printPrice,
}