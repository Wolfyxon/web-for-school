/*
1. Napisz kod, który dla zdefiniowanej szkolnej oceny (1,2,3,4,5,6) - zmienna ocena - wypisze jej opis słowny 
np. dostateczny. Informacja ma być wypisana w div-ie id=opisoceny..
*/

window.addEventListener("load", () => {
    const gradeNames = [
        "niedostateczny",
        "dopuszczający",
        "dostateczny",
        "dobry",
        "bardzo dobry",
        "celujący"
    ];
    
    const gradeInput = document.getElementById("ocena");
    const output = document.getElementById("opisoceny");

    function updateGrade() {
        output.innerText = gradeNames[gradeInput.value - 1] || "?";
    }
    updateGrade();

    gradeInput.addEventListener("change", updateGrade);
    gradeInput.addEventListener("keyup", updateGrade);
    
});