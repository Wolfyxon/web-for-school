const carInfo = require("./carInfo.js")
const carPrice = require("./carPrice.js")

for(const car of carInfo.cars) {
    car.print();
    carPrice.printPrice(car);
}