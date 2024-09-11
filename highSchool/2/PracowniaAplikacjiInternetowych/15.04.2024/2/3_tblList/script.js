/*
    Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. 
    Wyświetl jej elementy w jedenj lini rozdzielone przecinakmi. Poniżej wyświetl jej elementy w kolejnych akapitach. 
*/

const osoby = ["Jan Nowak", "Kazimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramski"];

window.addEventListener("load", () => {
    document.write(osoby.join(", "));

    const frag = document.createDocumentFragment();

    for(const v of osoby) {
        const p = document.createElement("p");
        p.innerText = v;
        frag.appendChild(p);
    }

    document.body.appendChild(frag);
});