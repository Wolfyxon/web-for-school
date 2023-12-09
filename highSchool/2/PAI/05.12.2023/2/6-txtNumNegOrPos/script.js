window.addEventListener("load",() => {
    const liczba = 4;
    const disp = document.getElementById("opis");
    if(liczba > 0) disp.innerText = "Dodatnia";
    else disp.innerText = "0/ujemna";
});