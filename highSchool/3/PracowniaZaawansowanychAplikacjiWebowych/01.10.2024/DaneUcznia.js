const data = {
    "Imię": "Friderick",
    "Nazwisko": "Fazbear",
    "Klasa": "πŻ"
}

module.exports = () => {
    let str = "";
    const entries = Object.entries(data);

    entries.forEach((entry, i) => {
       str += `${entry[0]}: ${entry[1]}`;
       if(i != entries.length - 1) str += "\n";
    });

    console.log(str);
};