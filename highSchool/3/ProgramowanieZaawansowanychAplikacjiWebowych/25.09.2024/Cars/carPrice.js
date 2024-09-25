const carInfo = require("./carInfo.js")
const { Car } = carInfo;

/**
 * @param {Car} car 
 * @returns {number}
 */
function getPrice(car) {
    if(car.is("Mazda", "CX5")) return 99999
    if(car.is("Mazda", "Miata")) return 20000
    if(car.is("Volkswagen", "Golf")) return 30000
}

/**
 * @param {Car} car 
 */
function printPrice(car) {
    console.log(getPrice(car), "zł");
}

module.exports = {
    getPrice: getPrice,
    printPrice: printPrice
};