const grades = {
    "j. polski": 5,
    "Matematyka": 4,
    "Historia": 3
}

function printGrades() {
    Object.entries(grades).forEach((entry, i) => {
       console.log(`${entry[0]} - ${entry[1]}`); 
    });
}

module.exports = printGrades;