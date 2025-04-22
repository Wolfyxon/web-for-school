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
                    $db = mysqli_connect("localhost", "root", null, "mieszalnia");
                    mysqli_set_charset($db, "utf8");

                    $from = $_POST["date-from"];
                    $to = $_POST["date-to"];

                    $res = null;
                    
                    if(!empty($from) && !empty($to)) {
                        $stm = mysqli_prepare($db,"
                            SELECT 
                                nazwisko, 
                                imie, 
                                zamowienia.id as id_zamowienia, 
                                data_odbioru,
                                pojemnosc,
                                kod_koloru
                            FROM klienci
                            INNER JOIN zamowienia ON zamowienia.id_klienta = klienci.id
                            WHERE data_odbioru > ? AND data_odbioru < ?
                            ORDER BY data_odbioru ASC"
                        );
                        
                        $stm->execute([$from, $to]);

                        $res = $stm->get_result();
                    } else {
                        $res = mysqli_query($db, "
                            SELECT 
                                nazwisko, 
                                imie, 
                                zamowienia.id as id_zamowienia, 
                                data_odbioru,
                                pojemnosc,
                                kod_koloru
                            FROM klienci
                            INNER JOIN zamowienia ON zamowienia.id_klienta = klienci.id
                            ORDER BY data_odbioru ASC
                        ");
                        echo "hi";
                    }

                    foreach($res as $row) {
                        echo sprintf("
                                <tr>
                                    <td>%s</td>
                                    <td>%s</td>
                                    <td>%s</td>
                                    <td style='background-color: #%s'>%s</td>
                                    <td>%s</td>
                                    <td>%s</td>
                                </tr>
                            ", 
                    $row["id_zamowienia"],
                            $row["nazwisko"],
                            $row["imie"],
                            $row["kod_koloru"],
                            $row["kod_koloru"],
                            $row["pojemnosc"],
                            $row["data_odbioru"]
                        );
                    }

                    mysqli_close($db);
                ?>
            </table>
        </div>

        <footer>
            <h3>Egzamin INF.03</h3>
            <p>Autor: 00000000</p>
        </footer>
    </body>
</html>
