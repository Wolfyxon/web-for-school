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

const oferta = new Oferta("Kia", "Carens", 60000, 8, 2000);