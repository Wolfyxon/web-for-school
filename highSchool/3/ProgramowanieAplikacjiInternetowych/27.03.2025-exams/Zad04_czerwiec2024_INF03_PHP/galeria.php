<?php 
    $db = mysqli_connect("localhost", "root", null, "galeria");
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>Galeria</title>
        
        <meta charset="utf-8">
        <link rel="stylesheet" href="styl.css">
    </head>
    <body>
        <header id="banner">
            <h1>Tematy zdjęć</h1>
        </header>

        <div id="main">
            <section id="left">
                <h2>Tematy zdjęć</h2>
                <ol>
                    <li>Zwierzęta</li>
                    <li>Krajobrazy</li>
                    <li>Miasta</li>
                    <li>Przyroda</li>
                    <li>Samochody</li>
                </ol>
            </section>

            <section id="center">
                <?php
                    $query1 = "
                        SELECT plik, tytul, polubienia, imie, nazwisko
                        FROM zdjecia INNER JOIN autorzy ON 
                        zdjecia.autorzy_id = autorzy.id
                        ORDER BY nazwisko ASC
                    ";
                    
                    foreach(mysqli_query($db, $query1) as $img) {
                        echo "<div class='image'>";
                        
                        $p_content = sprintf(
                            "Autor: %s %s",
                            $img["imie"], $img["nazwisko"]
                        );

                        if($img["polubienia"] > 40) {
                            $p_content .= ". <br>Wiele osób polubiło ten obraz";
                        }

                        echo sprintf("
                            <img src='%s' alt='zdjecie'>

                            <div class='image-meta'>
                                <h3>%s</h3>
                                <p>%s</p>
                                
                                <a href='%s' class='image-download' download>
                                    Pobierz
                                </a>
                            </div>
                            
                        ",
                            $img["plik"], $img["tytul"], $p_content, $img["plik"]
                        );

                        echo "</div>";
                    }
                ?>
            </section>

            <section id="right">
            <h2>Najbardziej lubiane</h2>
                <?php
                    echo "TODO"
                ?>
                <strong>Zobacz wszystkie nasze zdjęcia</strong>
            </section>
        </div>

        <footer>
            <h5>Stronę wykonał: 00000000000</h5>
        </footer>
    </body>
</html>

<?php 
    mysqli_close($db);
?>