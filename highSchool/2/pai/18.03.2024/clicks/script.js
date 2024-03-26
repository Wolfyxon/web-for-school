/*
this, metoda .querySelectorAll(), pętla for-of

2. Utwórz 3 elementy, przycisk z id=przycisk, div-a z id=element_div i span z id=element_span. 
Kliknięcie na którykolwiek z nich ma wypisywać identyfikator klikniętego elementu do utworzonego div-a z id=opis. Użyj this.
*/

window.addEventListener("load", () => {
    const description = document.getElementById("opis");

    for (const elm of document.querySelectorAll("#detectors > *")) {
        elm.addEventListener("click", function() {
            description.innerText = this.id;
        });
    }
});