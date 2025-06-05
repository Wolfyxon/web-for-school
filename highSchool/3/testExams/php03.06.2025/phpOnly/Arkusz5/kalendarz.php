<?php 

$db = new mysqli("localhost", "root", null, "kalendarz");

function get_imieniny($date) {
    global $db;

    $timestamp = strtotime($date);
    $year_date = date("m-d", $timestamp);

    $stm = $db->prepare("SELECT imiona FROM imieniny WHERE data=?");
    $stm->execute([$year_date]);
    $row = $stm->get_result()->fetch_assoc();

    $imiona = "brak danych";

    if($row) {
        $imiona = $row["imiona"];
    }

    return $imiona;
}

?>

<!DOCTYPE HTML>
<html lang="pl-PL">
    <head>
        <meta charset="UTF-8">
        <title>Kalendarz</title>
        <link rel="stylesheet" type="text/css" href="styl.css">
    </head>
    <body>
        <header>
            <h1>Dni, miesiące, lata...</h1>
        </header>
        <section class="napis">
            <p>
                <?php
                    $date = date("d-m-Y");

                    $imiona = get_imieniny($date);
                    echo("Dzisiaj jest czwartek, $date, imieniny: $imiona");
                ?>
            </p>
        </section>
        <section class="lewy">
            <table>
                <tr>
                    <th>liczba dni</th>
                    <th>miesiąc</th>
                </tr>
                <tr>
                    <td rowspan="7">31</td>
                    <td>styczeń</td>
                </tr>
                <tr>
                    <td>marzec</td>
                </tr>
                <tr>
                    <td>maj</td>
                </tr>
                <tr>
                    <td>lipiec</td>
                </tr>
                <tr>
                    <td>sierpień</td>
                </tr>
                <tr>
                    <td>październik</td>
                </tr>
                <tr>
                    <td>grudzień</td>
                </tr>
                <tr>
                    <td rowspan="4">30</td>
                    <td>kwiecień</td>
                </tr>
                <tr>
                    <td>czerwiec</td>
                </tr>
                <tr>
                    <td>wrzesień</td>
                </tr>
                <tr>
                    <td>listopad</td>
                </tr>
                <tr>
                    <td>28 lub 29</td>
                    <td>luty</td>
                </tr>
            </table>
        </section>
        <section class="srodkowy">
            <h2>Sprawdź kto ma urodziny</h2>
            <form method="post">
                <input name="date" value="05-04" type="date" min="2024-01-01" max="2024-12-31"><!--tylko rok 2024-->
                <button type="submit">wyślij</button>
            </form>
            
            <?php
                $date = $_POST["date"] ?? null;

                if($date) {
                    $imiona = get_imieniny($date);

                    echo("Dnia $date są imieniny $imiona");
                }
            ?>

        </section>
        <section class="prawy">
            <a target="_blank" href="https://pl.wikipedia.org/wiki/Kalendarz_Majów"><img src="Kalendarz.gif" alt="Kalendarz Majów"></a>
            <h2>Rodzaje kalendarzy</h2>
            <ol>
                <li>słoneczny
                    <ul>
                        <li>kalendarz Majów</li>
                        <li>Juliański</li>
                        <li>gregoriański</li>
                    </ul>
                </li>
                <li>księżycowy
                    <ul>
                        <li>starogrecki</li>
                        <li>babiloński</li>
                    </ul>
                </li>
            </ol>
        </section>
        <footer>
            <p>Stronę opracował(a): XYZ</p>
        </footer>
    </body>
</html>

<?php

$db->close();

?>