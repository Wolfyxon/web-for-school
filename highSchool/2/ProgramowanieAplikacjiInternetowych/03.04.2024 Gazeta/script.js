window.addEventListener("load", () => {

    const articles = document.getElementById("articles");

    function hideArticles() {
        for(const article of document.querySelectorAll("article")) {
            article.style.display = "none";
        }
    }

    /**
     * @param {Stringt} section 
     * @param {String} title 
     * @param {String} content 
     */
    function addArticle(section, title, content) {
        const btn = document.createElement("button");
        btn.innerText = section;

        const container = document.createElement("article");

        const h = document.createElement("h1");
        h.innerText = title;

        const p = document.createElement("p");
        p.innerText = content;

        articles.appendChild(btn);

        container.appendChild(h);
        container.appendChild(p);
        articles.appendChild(container);

        container.style.display = "none";
        btn.addEventListener("click", () => {
            let wasVisible = container.style.display != "none"
            hideArticles();
            if(!wasVisible) container.style.display = "";
        });
    }

    addArticle("Sekcja wiadomości z kraju", "Szczepimy seniorów", "Od piątku osoby powyżej 80 lat mogą zarejestrować się na szczepienie przeciw COVID-19. Do wyboru mają niemal sześć tysięcy przychodni, w których od 25 stycznia będa odbywały się szczepienia. Termin można zarezerwować telefonicznie, przez internet lub w punkcie szczepień. Na szczepienie przeciw COVID-19 od piątku mogą się umawiać seniorzy powyżej 80. roku życia, a tydzień później ruszą zapisy dla osób, które ukończyły 70 lat. Szczepienia dla seniorów rozpoczną się 25 stycznia.");
    addArticle("Sekcja sportowa", "Stoch i Kubacki na podium w Bischofshofen", " W Środę w Bischofshofen odbędzie się ostatni konkurs 69. Turnieju Czterech Skoczni. Po trzech zawodach prowadzi Kamil Stoch z dużą przewagą nad Dawidem Kubackim i Norwegiem Halvorem Egnerem Granerudem. Skocznia im. Paula Ausserleitnera w Bischofshofen, gdzie tradycyjnie kończy się TCS, jest szczęśliwa dla reprezentantów Polski, którzy wygrali tu trzy z ostatnich czterech konkursów - Stoch w 2017 i 2018, a Kubacki - w ubiegłym roku.");
    addArticle("Sekcja aktualności","Dzień Babci 2021. Pomysły na prezent i historia święta w Polsce","Dzień Babci to wyjątkowe święto, w którym zewsząd płyną życzenia skierowane właśnie w stronę babć. Najmłodsi własnoręcznie lub z drobną pomocą wykonują piękne laurki, a nieco starsze wnuczęta z pewnością mają przygotowany niejeden prezent. Tego dnia w szkołach często przygotowywane są także różne przedstawienia, a oryginalne scenariusze często wywołują u dziadków łzy wzruszenia.");
    addArticle("Sekcja ogłoszeń","Zaginione / znalezione"," W Oławie, na ulicy Lipowej w piątek wieczorem znalazłam czarnego małego kotka. Jest zadbany i ufny, ma czerwony obróżkę. Telefon 600100200.");

    hideArticles();
});