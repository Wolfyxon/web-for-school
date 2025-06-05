<!DOCTYPE HTML>
<html lang="pl-PL">
    <head>
        <meta charset="UTF-8">
        <title>Obuwie</title>
        <link rel="stylesheet" type="text/css" href="style1.css">
    </head>
    <body>
        <header>
            <h1>Obuwie męskie</h1>
        </header>
        <main>
            <h2>Zamówienie</h2>
            
            <?php
                $model = $_POST["model"] ?? null;
                $size = $_POST["size"] ?? null;
                $pairs = $_POST["pairs"] ?? 1;

                if(!$model || !$size) {
                    return;
                }

                $db = new mysqli("localhost", "root", null, "obuwie");

                $stm = $db->prepare("SELECT nazwa, cena, kolor, kod_produktu, material, nazwa_pliku FROM produkt 
                                     JOIN buty ON buty.model = produkt.model WHERE produkt.model = ?
                                    ");
                
                $stm->execute([$model]);
                $row = $stm->get_result()->fetch_assoc();

                if($row) {
                    $img = $row["nazwa_pliku"];
                    $name = $row["nazwa"];
                    $total_cost = $row["cena"] * $pairs;
                    $color = $row["kolor"];
                    $material = $row["material"];

                    echo "<img src='$img'>
                          <h2>$name</h2>
                          <p>cena za $pairs par: $total_cost zł</p>
                          <p>Szczegóły produktu: $color, $material</p>
                          <p>Rozmiar: $size</p>
                    ";
                } else {
                    echo "Nieznany model";
                }

                $db->close();
            ?>

            <a href="index.php">Strona główna</a>
        </main>
        <footer>
            <p>Autor strony: XYZ</p>
        </footer>
    </body>
</html>