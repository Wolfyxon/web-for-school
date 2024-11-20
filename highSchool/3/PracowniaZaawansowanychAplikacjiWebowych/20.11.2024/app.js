const fs = require("fs");

const dirStart = "C++";
const dirFinal = "Python";

const fileStart = "cpp_example.txt";
const fileFinal = "Python_test.js"; // this is so cursed

fs.mkdir(dirStart);
fs.writeFile(dirStart + "/" + fileStart, "");

fs.rename(dirStart, dirFinal);
fs.rename(dirFinal + "/" + fileStart, fileFinal);