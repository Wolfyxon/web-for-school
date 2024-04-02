/*
Utwórz prosty "dodawacz" liczb, który będzie wyglądał w sposób następujący:

(Image reconstruction)

[ 23          ] + [ 128         ] [ = ] 151
*/

window.addEventListener("load", () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const result = document.getElementById("result");

    document.getElementById("btn-sum").addEventListener("click", () => {
        result.innerText = num1.value + num2.value;
    });
});