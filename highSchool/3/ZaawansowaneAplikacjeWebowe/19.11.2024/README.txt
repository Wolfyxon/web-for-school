1. Stwórz stronę z przyciskiem. Po kliknięciu przycisku, kolor tła strony internetowej ma się zmienić na losowy kolor. Wykorzystaj jQuery do obsługi kliknięcia i zmiany stylu CSS.
Napisz skrypt jQuery, który będzie obsługiwał kliknięcie przycisku i zmieniał kolor tła strony na losowy kolor. 

2. Stwórz stronę HTML z elementem, który będzie reagować na podwójne kliknięcie myszy. 
Napisz skrypt jQuery, który będzie działać po załadowaniu strony. Skrypt ten powinien:
   - Znaleźć element, na którym ma być obsługiwane podwójne kliknięcie. Możesz użyć metody `.on()` z przypisanym zdarzeniem `dblclick`.
Po podwójnym kliknięciu na elemencie, skrypt wyświetli alert z napisem „Hello World!”
Przetestuj stronę, klikając dwukrotnie na elemencie, aby upewnić się, że zdarzenie podwójnego kliknięcia jest obsługiwane poprawnie.

3. Twoim zadaniem jest stworzenie rozwijanego menu nawigacji na stronie internetowej, które będzie można otwierać i zamykać za pomocą przycisku. Wykorzystaj metodę `.toggle()` w jQuery, aby przełączać widoczność menu. W pliku HTML utwórz następujące elementy:
   - Przycisk o tekście "Menu" i id="menuButton".
   - Menu nawigacji jako element div o id="menu". Menu to lista linków nawigacyjnych.
W pliku HTML dołącz bibliotekę jQuery
Napisz kod jQuery, który:
   - Po kliknięciu przycisku "Menu" będzie przełączać widoczność menu nawigacji o id "menu" między ukryciem i wyświetleniem.
   - Upewnij się, że kod jest uruchamiany po załadowaniu całej strony, korzystając z metody `$(document).ready()`. W pliku CSS zdefiniuj początkowy styl dla menu nawigacji (na przykład, początkowo menu może być ukryte). Dodaj również odpowiedni styl do przycisku "Menu". Przetestuj działanie kodu, klikając przycisk "Menu" i sprawdź, czy menu nawigacji otwiera się i zamyka za każdym kliknięciem.
Aby przełączać widoczność menu nawigacji, możesz użyć metody `.toggle()` w jQuery, aby zmieniać jego atrybut `display` na "none" lub "block", lub również można manipulować klasami CSS.

4. Twoim zadaniem jest stworzenie interaktywnej animacji zmiany rozmiaru elementu na stronie internetowej za pomocą jQuery. Element powinien płynnie zmieniać swoje wymiary (np. rozszerzać lub zwężać) po kliknięciu przycisku.
W pliku HTML utwórz następujące elementy:
   - Przycisk o tekście "Zmień rozmiar" i id="zmienRozmiarButton".
   - Dowolny element (np. div, obrazek, tekst) o id="zmienianyElement", który będzie zmieniał swój rozmiar.
W pliku HTML dołącz bibliotekę jQuery. 
Napisz kod jQuery, który:
   - Po kliknięciu przycisku "Zmień rozmiar" animuje zmianę rozmiaru elementu o id "zmienianyElement" w sposób płynny.