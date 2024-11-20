const fs = require("fs");

async function input(query) {
    return new Promise((res) => {
        process.stdout.resume();

        process.stdout.once("data", (buf) => {
            res(buf.toString());
            process.stdout.pause();
        });
    });
}

const dirStart = "C++";
const dirFinal = "Python";

const fileStart = "cpp_example.txt";
const fileFinal = "Python_test.js"; // this is so cursed

fs.mkdirSync(dirStart);
fs.writeFileSync(dirStart + "/" + fileStart, "");

fs.renameSync(dirStart, dirFinal);
fs.renameSync(dirFinal + "/" + fileStart, dirFinal + "/" + fileFinal);