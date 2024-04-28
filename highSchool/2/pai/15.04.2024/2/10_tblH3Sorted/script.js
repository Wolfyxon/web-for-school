/*
    Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. 
    Nazwiska osób z tablicy, wyświetl jako nagłówki 3 stopnia, które będą posortowane alfabetycznie. 
*/

window.addEventListener("load", () => {
    const osoby = ["Jan Nowak", "Kazimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramski"];
    osoby.sort();
    
    const frag = document.createDocumentFragment();

    for(const v of osoby) {
        const h = document.createElement("h3");
        h.innerText = v;
    
        frag.appendChild(h);
    }

    document.body.appendChild(frag);
});