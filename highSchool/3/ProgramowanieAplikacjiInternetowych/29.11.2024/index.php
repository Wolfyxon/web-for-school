<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <form action="endpoint.php" method="post">
            <h1>Formularz kontaktowy</h1>

            <label for="2nd-name">Nazwisko</label>
            <input type="text" id="2nd-name" name="secondName">

            <label for="1st-name">Imię</label>
            <input type="text" id="1st-name" name="firstName">
            
            <label for="job">Zawód</label>
            <input type="text" id="job" name="job">
            
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email">
            
            <h2>Wykształcenie</h2>
            <div id="education-container">
                <div>
                    <input type="radio" name="education" id="edu-basic" value="Podstawowe">
                    <label for="edu-basic">Podstawowe</label>
                </div>
                <div>
                    <input type="radio" name="education" id="edu-avg" value="Średnie">
                    <label for="edu-avg">Średnie</label>
                </div>
                <div>
                    <input type="radio" name="education" id="edu-high" value="Wyższe">
                    <label for="edu-high">Wyższe</label>
                </div>
            </div>

            <h2>Wybór języka</h2>
            <select multiple name="langs[]">
                <option value="Angielski">Angielski</option>
                <option value="Niemiecki">Niemiecki</option>
                <option value="Francuski">Francuski</option>
                <option value="Włoski">Włoski</option>
            </select>

            <div id="privacy-container">
                <input type="checkbox" name="privacy" id="privacy">
                <label for="privacy">Zgadzam się na przetwarzanie moich danych osobowych</label>
            </div>

            <div>
                <input type="submit" value="Wyślij">
                <input type="reset" value="Wyczyść">
            </div>
        </form>
    </body>
</html>
