<?php
    $db = new mysqli("localhost", "root", null, "obuwie");
?>

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
            <form method="post" class="kontrolki" action="zamow.php">
                <label>Model:
                    <select name="model">
                        <?php 
                            $res = $db->query("SELECT model FROM produkt");
                            
                            while($row = $res->fetch_assoc()) {
                                
                                echo "<option>" . $row["model"] . "</option>";
                            }
                        ?>
                    </select>
                </label>
                <label>Rozmiar:
                    <select name="size">
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                    </select>
                </label>
                <label>
                        Liczba par:
                        <input type="number" name="pairs">
                </label>
                <button>Zamów</button>
            </form>
            
            <?php
                $res = $db->query("SELECT buty.model, nazwa, cena, nazwa_pliku FROM buty JOIN produkt ON produkt.model = buty.model");

                while($row = $res->fetch_assoc()) {
                    $img = $row["nazwa_pliku"];
                    $name = $row["nazwa"];
                    $model = $row["model"];
                    $cost = $row["cena"];

                    echo "<div class='buty'>
                            <img src='$img' alt='but męski'>

                            <h2>$name</h2>
                            <h5>Model: $model</h5>
                            <h4>Cena: $cost</h4>

                          </div>";
                }
            ?>
        </main>
        <footer>
            <p>Autor strony: XYZ</p>
        </footer>
    </body>
</html>

<?php
    $db->close();
?>