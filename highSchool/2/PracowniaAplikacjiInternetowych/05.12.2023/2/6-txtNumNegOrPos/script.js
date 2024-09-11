window.addEventListener("load",() => {
    const liczba = 4;
    const disp = document.getElementById("opis");

    disp.innerText = liczba > 0 ? "Dodatnia" : "0/ujemna";
});