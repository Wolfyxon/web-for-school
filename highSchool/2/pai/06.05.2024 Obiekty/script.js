/*
    1. Zdefiniuj obiekt o nazwie oferta, z następującymi właściwościami: marka : "Kia", model : "Carens", cena : 60000 i metodą o nazwie koszt100km(), która zwraca wartość 37 zł. 
    2. Jak wyżej, zdefiniuj dodatkowo właściwość spalanie przypisz jej wartość 8 (8 litrów/100km). 
    "Przed obiektem" zdefiniuj zmienną pb95 przypisz jej wartość 4 (4 zł./litr). Zmodyfikuj metodę koszt100km() tak by zwracała koszt, przy założenej cenie paliwa i spalaniu danego samochodu. 
    3. Do obiektu dodaj metodę wiekSamochodu(), która zwraca jego wiek na podstawie podanego rocznika. Obiekt wyświetl w konsoli. 
    4. Zmodyfikuj metodę wiekSamochodu(), tak by zwracała odpowiednio 1 rok, 2 lata, 3 lata, 4 lata, 5 lat, 6 lat .... Sprawdź działania dla kilku możliwych roczników. 
    5. Zdefiniuj konstruktor o nazwie Oferta. Zdefiniuj za jego pomocą obiekt o nazwie oferta1. Wyświetl jego zawartość w konsoli. 
    6. Zawartość obiektu wypisz do div-a od id="spisofert". Wyróznij: markę, model, cenę. 
    7. Obiekty klasy Oferta, uczyń częściami składowymi obiektu Komis. Wypisz obiekt Komis do konsoli. 
    8. Wypisz do konsoli klucze obiektu Komis. Wcześiej zdefiniuj funkcje wypiszOferte(idOferty), i to ją w pętli wykorzystaj do wypisywania kluczy. 
    9. Wypisz do konsoli poszczególne oferty. Oferty ma wypisywać funkcja wypiszOferte(idOferty), użyta w pętli. 
    10. Zdefiniuj funkcję wypiszOferte(idOferty), ma ona w miejscu wywołania zwracać kod HTML ofertę. 
    11. Zdefiniuj funkcję wypiszOferte(idOferty), ma ona w miejscu wywołania zwracać kod HTML ofertę. Funkcja ma być wywołana w pętli przez funkcję wypiszWszystkieOferty(). 
    12. Zdefiniuj funkcję usunOferte(idOferty), ma ona usuwać obiekt - ofertę - z podanym identyfikatorem. Zdefiniuj zewnętrzny arkusz styli dla strony. 
    13. Dodaj nową ofertę: Suzuki, Vitara, 80500 zł,9 l./100km.,2019 rok 
    14. Zdefiniuj funkcję dodajOferte(marka, model, przebieg, spalanie, rocznik). Klucz - identyfikator ogłoszenia - ma być definiowany ręcznie. 
    15. Zdefiniuj funkcję dodajOferte(marka, model, przebieg, spalanie, rocznik). Klucz - identyfikator ogłoszenia - ma być tworzony automatycznie, na podstawie kluczy już istniejących. 
    16. Zdefiniuj funkcję zmienOferte(idOferty, marka, model, cena, spalanie, rocznik). Wypisz w konsoli ogłosznie po zmianie danych.
    17. W każdym ogłoszeniu utwórz aktywny element - słowo - Usuń. Kliknięcie na nie ma powodować usunięcie oferty. 
    18. W każdym ogłoszeniu utwórz aktywny element - słowo - Edycja. Kliknięcie na nie ma powodować przepisanie zawartości oferty do formularza. 
    Po zmianie informacji i naciśnięciu przycisku Zmień, dane mają ulec zmianie - nastąpić ma odświeżenie treści. 
    19. Do formularza dodaj przycisk Dodaj, naciśnięcie przycisku ma dodać ofertę na podstawie danych z formularza. Nastąpić ma także odświeżenie treści strony. 
    20. Zmodyfikuj dotychczasowe funkcje, uprość kod. Link do przykładowego rozwiązania poniżej. 
*/

const pb95 = 4;

class Oferta {
    marka;
    model;
    cena;
    spalanie;
    rocznik;
    id;
    
    constructor(marka, model, cena, spalanie, rocznik) {
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.spalanie = spalanie;
        this.rocznik = rocznik;
    }

    koszt100km() {
        return this.spalanie * pb95 + 5; // 8 * 4 + 5 == 37
    }

    wiekSamochodu() {
        const offset = new Date().getFullYear() - this.rocznik;
        
        if(offset === 1) return "1 rok";
        if(offset <= 4) return `${offset} lat`;

        return `${offset} lat`;
    }
}

const oferta1 = new Oferta("Kia", "Carens", 60000, 8, 2000);
console.log(oferta1);

window.addEventListener("load", () => {
    const offerList = document.getElementById("spisofert");

    const form = {
        edit: document.getElementById("form-controls-edit"),

        btnAdd: document.getElementById("btn-add"),
        btnApply: document.getElementById("btn-apply"),
        btnCancel: document.getElementById("btn-cancel"),

        marka: document.getElementById("input-marka"),
        model: document.getElementById("input-model"),
        rocznik: document.getElementById("input-rocznik"),
        spalanie: document.getElementById("input-spalanie"),
        cena: document.getElementById("input-cena")
    };


    let offerCounter = 1;
    let currentlyEdited = null;
    let offers = [];
    
    function updateEditState() {
        if(currentlyEdited) {
            form.edit.style.display = "";
            form.btnAdd.style.display = "none";
        } else {
            form.edit.style.display = "none";
            form.btnAdd.style.display = "";
        }
    }

    function cancelEdit() {
        currentlyEdited = null;
        updateEditState();
    }

    function getOffer(id) {
        for(const offer of offers) {
            if(offer.id === id) return offer;
        }
    }

    function getOfferElement(id) {
        for(const offerElm of offerList.children) {
            if(offerElm.getAttribute("offer-id") == id) return offerElm;
        }
    }

    /**
     * @param {Oferta} offer 
     * @param {HTMLDivElement} elm 
     */
    function updateOfferElement(offer, elm) {
        elm.getElementsByClassName("marka")[0].innerText = offer.marka;
        elm.getElementsByClassName("model")[0].innerText = offer.model;

        elm.getElementsByClassName("rocznik")[0].innerText = offer.rocznik;
        elm.getElementsByClassName("spalanie")[0].innerText = offer.spalanie;
        elm.getElementsByClassName("cena")[0].innerText = offer.cena;
    }

    /**
     * Zdefiniuj funkcję dodajOferte(marka, model, przebieg, spalanie, rocznik). 
     * Klucz - identyfikator ogłoszenia - ma być definiowany ręcznie. 
     * @param {Oferta} offer 
     */
    function dodajOferte(offer) {
        const id = offer.id || offerCounter;
        offerCounter++;

        offer.id = id;
        if(!offers.includes(offer)) offers.push(offer);

        const elm = document.getElementById("offer-template").cloneNode(true);
        elm.setAttribute("offer-id", id);
        elm.style.display = null;
        elm.id = null;

        updateOfferElement(offer, elm);
        
        elm.getElementsByClassName("btn-del")[0].addEventListener("click", () => {
            usunOferte(id);
        });

        elm.getElementsByClassName("btn-edit")[0].addEventListener("click", () => {
            form.marka.value = offer.marka;
            form.model.value = offer.model;
            form.rocznik.value = offer.rocznik;
            form.spalanie.value = offer.spalanie;
            form.cena = offer.cena;

            currentlyEdited = id;
            updateEditState();
        });

        offerList.appendChild(elm);
    }

    /**
     * Zdefiniuj funkcję zmienOferte(idOferty, marka, model, cena, spalanie, rocznik). Wypisz w konsoli ogłosznie po zmianie danych.
     * @param {number} id 
     * @param {Offer} offer 
     */
    function zmienOferte(offer) {
        if(!offer.id) throw "Obiekt oferty nie zawiera ID";

        const elm = getOfferElement(offer.id);
        updateOfferElement(offer, elm);

        console.log(`Zaktualizowano ofertę o ID: ${id}`);
    }

    /**
     * 12. Zdefiniuj funkcję usunOferte(idOferty), ma ona usuwać obiekt - ofertę - z podanym identyfikatorem.
     * @param {number} id 
     */
    function usunOferte(id) {
        const offer = getOffer(id);
        if(!offer) throw "Nieznana oferta";

        offers.slice(offers.indexOf(offer), 1);
        getOfferElement(id).remove();
    }

    /**
     * 11. Zdefiniuj funkcję wypiszOferte(idOferty), ma ona w miejscu wywołania zwracać kod HTML ofertę. 
     * Funkcja ma być wywołana w pętli przez funkcję wypiszWszystkieOferty(). 
     * @param {number} id 
     * @returns 
     */
    function wypiszOferte(id) {
        const elm = getOfferElement(id)
        if(!elm) throw "Nieznana oferta";

        return elm.innerHTML;
    }

    /**
     * 11. Zdefiniuj funkcję wypiszOferte(idOferty), ma ona w miejscu wywołania zwracać kod HTML ofertę. 
     * Funkcja ma być wywołana w pętli przez funkcję wypiszWszystkieOferty(). 
    */
    function wypiszWszystkieOferty() {
        for(const offer of offers) {
            wypiszOferte(offer.id);
        }
    }

    form.btnAdd.addEventListener("click", () => {
        const offer = new Oferta(
                        form.marka.value,
                        form.model.value,
            parseInt(   form.rocznik.value),
            parseFloat( form.spalanie.value),
            parseFloat( form.cena)
        );

        dodajOferte(offer);
    });

    form.btnCancel.addEventListener("click", () => {
        currentlyEdited = null;
        updateEditState();
    });

    form.btnApply.addEventListener("click", () => {
        const offer = getOffer(currentlyEdited);
        if(!offer) return;

        const elm = getOfferElement(currentlyEdited);
        if(!elm) return;

        offer.marka     =                form.marka.value;
        offer.model     =                form.model.value;
        offer.rocznik   =    parseInt(   form.rocznik.value);
        offer.spalanie  =    parseFloat( form.spalanie.value);
        offer.cena      =    parseFloat( form.cena);

        updateOfferElement(offer, elm);
        cancelEdit();
    });

    dodajOferte(oferta1);
    dodajOferte(new Oferta("Suzuki", "Viara", 80500, 9, 2019));

    wypiszWszystkieOferty();
    updateEditState();
});