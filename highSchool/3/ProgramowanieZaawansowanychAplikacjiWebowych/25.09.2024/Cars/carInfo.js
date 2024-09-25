class Car {
    brand = "";
    model = "";
    productionYear = 2024

    /**
     * @param {string} brand 
     * @param {string} model 
     * @param {number} productionYear 
     */
    constructor(brand, model, productionYear) {
        this.brand = brand;
        this.model = model;
        this.productionYear = productionYear
    }

    /**
     * @param {string} brand 
     * @param {string} model 
     * @returns {boolean}
     */
    is(brand, model) {
        return (
            this.brand.toLowerCase() == brand.toLowerCase()
            &&
            this.model.toLowerCase() == model.toLowerCase()
        );
    }

    print() {
        console.log(this.toString());
    }

    /**
     * @returns {string}
     */
    toString() {
        return `${this.brand} ${this.model} ${this.productionYear}`;
    }
}

const cars = [
    new Car("Mazda", "CX5", 2024),
    new Car("Mazda", "Miata", 2015),
    new Car("Volkswagen", "Golf", 2010)
];

/**
 * @param {string} brand 
 * @param {string} model
 * @returns {Car} 
 */
function getCar(brand, model) {
    for(const car of cars) {
        if(car.is(brand, model)) return car;
    }
}

module.exports = {
    Car: Car,
    cars: cars,
    getCar: getCar
};