/*
Napisz skrypt, który będzie powodował, że naciśnięcie przycisku z napisem Zmień tło będzie zmieniało kolor tła na żółty. 
*/

window.addEventListener("load", () => {
    document.getElementById("btn-set").addEventListener("click", () => {
        document.body.style.backgroundColor = "yellow";
    });
});