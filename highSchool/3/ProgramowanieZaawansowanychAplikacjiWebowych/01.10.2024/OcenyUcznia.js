const grades = {
    "j. polski": 5,
    "Matematyka": 4,
    "Historia": 3
}

function printGrades() {
    let str = "";
    const entries = Object.entries(grades);

    entries.forEach((entry, i) => {
       str += `${entry[0]} - ${entry[1]}`;
       if(i != entries.length - 1) str += "\n";
    });

    console.log(str);
}

module.exports = printGrades;