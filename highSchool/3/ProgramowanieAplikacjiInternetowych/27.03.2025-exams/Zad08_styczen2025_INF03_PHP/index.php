<?php 
    $db = mysqli_connect("localhost", "root", null, "mieszalnia");
    mysqli_set_charset($db, "utf8");
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>Mieszalnia farb</title>

        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <img src="baner.png" alt="Mieszalnia farb">
        </header>

        <form target="_self" method="post">
            <label for="date-from">Data odbioru od: </label>
            <input type="date" name="date-from" id="date-from">

            <label for="date-to">do: </label>
            <input type="date" name="date-to" id="date-to">

            <input type="submit" value="Wyszukaj">
        </form>
        
        <div id="main">
            <table>
                <tr>
                    <th>Nr. zamówienia</th>
                    <th>Nazwisko</th>
                    <th>Imię</th>
                    <th>Kolor</th>
                    <th>Pojemność [ml]</th>
                    <th>Data odbioru</th>
                </tr>
                <?php
                    // TODO
                ?>
            </table>
        </div>

        <footer>
            <h3>Egzamin INF.03</h3>
            <p>Autor: 00000000</p>
        </footer>
    </body>
</html>