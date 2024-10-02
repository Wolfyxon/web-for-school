const dane = require("./DaneUcznia.js");
const oceny = require("./OcenyUcznia.js");
const legitymacja = require("./Legitymacja.js");
const religia = require("./Religia.js");

/**
 * 
 * @param {string} title 
 * @param {function} func 
 */
function call(title, func) {
    console.log(`--== ${title}: ==--`)
    func();
    console.log();
}

call("Dane", dane);
call("Oceny", oceny);
call("Legitymacja", legitymacja);
call("Religia", religia);
