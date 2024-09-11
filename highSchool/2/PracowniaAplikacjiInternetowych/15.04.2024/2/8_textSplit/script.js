/*
    Podany tekst: "JavaScript jest językiem programowania od zawsze związanym z tworzeniem aplikacji WWW." 
    podziel na wyrazy, każdy wyraz wyświetl jako osobny element z żółtym tłem. 
*/

const text = "JavaScript jest językiem programowania od zawsze związanym z tworzeniem aplikacji WWW.";

window.addEventListener("load", () => {
    const frag = document.createDocumentFragment();

    for(const word of text.split(" ")) {
        const span = document.createElement("span");
        span.innerText = word;
        frag.appendChild(span);
    };

    document.body.appendChild(frag);
});