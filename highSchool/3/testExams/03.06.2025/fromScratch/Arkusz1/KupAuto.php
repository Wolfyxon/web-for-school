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

    <section id="day-offer-container">
        <?php 
            $res = $db->query("SELECT model, rocznik, przebieg, paliwo, cena, zdjecie
                                      FROM samochody
                                      WHERE id = 10");
            $row = $res->fetch_assoc();

            function field($prefix, $column) {
                global $row;
                echo $prefix . ": " . $column . " ";
            }

            echo "<img src='" . $row["zdjecie"] . "'>";
            echo "<h4>Oferta dnia: Toyota " . $row["model"] . "</h4>";
            
            echo "<p>";
            field("Rocznik", $row["rocznik"]);
            field("przebieg", $row["przebieg"]);
            field("rodzaj paliwa", $row["paliwo"]);
            echo "</p>";

            echo "<h4>Cena: " . $row["cena"] . "</h4>";
        
        ?>
    </section>

    <section id="special-offers-container">
        <h2>Oferty Wyróżnione</h2>
        
        <?php 
            $res = $db->query("SELECT nazwa, model, rocznik, cena, zdjecie FROM marki
                                      JOIN samochody ON marki_id = marki.id
                                      WHERE wyrozniony = 1 LIMIT 4");

            while($row = $res->fetch_assoc()) {
                echo "<div class='offer'>";

                echo "<img src='" . $row["zdjecie"] . "'>";
                echo "<h4>". $row["nazwa"] . " " . $row["model"]  . "</h4>";
                echo "<p> Rocznik: " . $row["rocznik"] . "</p>";
                echo "<h4>Cena: " . $row["cena"] . "</h4>";

                echo "</div>";
            }
        ?>
    </section>
    
    <section id="search-container">
        <h2>Wybierz markę</h2>
        
        <form method="post">
            <select name="marka">
                <?php 
                    $res = $db->query("SELECT nazwa FROM marki");

                    while($row = $res->fetch_assoc()) {
                        echo "<option>" . $row["nazwa"] . "</option>";
                    }
                ?>
            </select>
            <input type="submit" value="Wyszukaj">
        </form>
        
        <?php 
            $marka = $_POST["marka"] ?? null;

            if($marka) {
                $stm = $db->prepare("SELECT nazwa, model, cena, zdjecie FROM samochody
                                            JOIN marki ON marki.id = samochody.marki_id
                                            WHERE nazwa = ?");
                $stm->execute([$marka]);
                $res = $stm->get_result();

                while($row = $res->fetch_assoc()) {
                    echo "<div class='offer'>";

                    echo "<img src='" . $row["zdjecie"] . "' alt='" . $row["model"] . "'>";
                    echo "<h4>" . $row["nazwa"] . " " . $row["model"] . "</h4>";
                    echo "<h4>Cena: " . $row["cena"] . "</h4>";

                    echo "</div>";
                }
            }
        ?>

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