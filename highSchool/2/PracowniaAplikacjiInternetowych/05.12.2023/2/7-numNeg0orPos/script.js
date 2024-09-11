window.addEventListener("load",() => {
    const liczba = 4;
    const disp = document.getElementById("opis");

    disp.innerText = liczba.toString() + " -"
    if(liczba > 0) disp.innerText += " Liczba dodatnia";
    else if (liczba == 0) disp.innerText += " Zero";
    else disp.innerText += " Liczba ujemna";
});