/*
    Napisz funkcję sumator. 
    Do funkcji można przekazać dowolną liczbę argumentów. W div-ie ma wypisywać podane argumenty i ich sumę. 
    Skorzystaj z tzw. rest parametr. 
*/

window.addEventListener("load", () => {
    const div = document.getElementById("result");

    /**
     * @argument {...number} parametry
     */
    function sumator() {
        let txt = "";
        let sum = 0;

        for(const arg of arguments) {
            txt += arg + " ";
            sum += arg;
        }

        txt += "Suma: " + sum;
        div.innerText = txt;
    }

    sumator(5, 2, 5, 4, 10, 6);
});