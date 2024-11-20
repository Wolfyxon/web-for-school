const fs = require("fs");

const dirStart = "C++";
const dirFinal = "Python";

const fileStart = "cpp_example.txt";
const fileFinal = "Python_test.js"; // this is so cursed

fs.mkdirSync(dirStart);
fs.writeFileSync(dirStart + "/" + fileStart, "");

fs.renameSync(dirStart, dirFinal);
fs.renameSync(dirFinal + "/" + fileStart, fileFinal);