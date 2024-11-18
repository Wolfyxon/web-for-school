const fs = require("fs");

const dir = "node_pliki/";

console.log(`-= Zawartość ${dir}: =-`);

for (const sub of fs.readdirSync(dir)) {
    console.log(" ", sub);
}

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year; 
    }

    toString() {
        return `${this.brand} ${this.model} ${this.year}`;
    }
}

console.log("-= Samochody =-");

const cars = [
    new Car("Toyota", "Yaris", 2019),
    new Car("Mazda", "Miata", 2016),
    new Car("Ford", "Focus", 210)
];

let content = "";

for(const car of cars) {
    content += car + "\n";
}

fs.writeFileSync(dir + "marka.txt", content);
console.log(content);

console.log("-= Zmiana nazwy =-");

fs.rename(dir + "oferta.pdf", dir + "dane_do_ulotki.pdf", (err) => {
    if(!err) {
        console.log("Nazwa została zmieniona");
    } else {
        console.log("Nie można zmienić nazwy:", err.message);
    }
});