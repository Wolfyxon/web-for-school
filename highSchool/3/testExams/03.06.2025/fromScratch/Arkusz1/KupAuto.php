<?php 
    $db = new mysqli("localhost", "root", null, "kupauto");
?>

<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <title>Komis aut</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1><i>KupAuto!</i> Internetowy Komis Samochodowy</h1>
    </header>

    <section>
        <!-- TODO: skrypt 1 -->
    </section>

    <section>
        <h2>Oferty Wyróżnione</h2>
        <!-- TODO: skrypt 2 -->
    </section>
    
    <section>
        <h2>Wybierz markę</h2>
        
        <form method="post">
            <select>
                <!-- TODO: skrypt 3 -->
            </select>
            <input type="submit" value="Wyszukaj">
        </form>
        <!-- TODO: skrypt 4 -->
    </section>

    <footer>
        <p>Stronę wykonał: 000000000000000</p>
        <p>
            <a href="http://firmy.pl/komis">Znajdź nas także</a>
        </p>
    </footer>
</body>
</html>

<?php 
    $db->close();
?>