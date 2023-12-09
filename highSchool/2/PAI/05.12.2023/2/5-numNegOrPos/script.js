window.addEventListener("load",() => {
    const liczba = 4;
    const disp = document.getElementById("text");

    disp.innerText = liczba.toString() + " -"
    if(liczba > 0) disp.innerText += " Liczba dodatnia";
    else disp.innerText += " Zero lub liczba ujemna";
});