<?php 

$db = new mysqli("localhost", "root", null, "wazenietirow");
$db->set_charset("utf8");

?>

<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <title>Ważenie samochodów ciężarowych</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header id="text-header">
        <h1>Ważenie pojazdów we Wrocławiu</h1>
    </header>
    <header id="img-header">
        <img src="obraz1.png" alt="waga" id="img-sign">
    </header>

    <section id="left">
        <h2>Lokalizacje wag</h2>
        <ol>
            <?php 
                $res = $db->query("SELECT ulica FROM lokalizacje");

                while($row = $res->fetch_assoc()) {
                    echo "<li> ulica " . $row["ulica"] . "</fli>";
                }
            ?>
        </ol>

        <h2>Kontakt</h2>
        <a href="mailto:wazenie@wroclaw.pl">napisz</a>
    </section>
    
    <section id="middle">
        <h2>Alerty</h2>

        <table>
            <tr>
                <th>rejestracja</th>
                <th>ulica</th>
                <th>waga</th>
                <th>dzień</th>
                <th>czas</th>
            </tr>
            
            <?php 
                $res = $db->query("SELECT rejestracja, waga, dzien, czas, lokalizacje.ulica FROM wagi
                                          JOIN lokalizacje ON wagi.lokalizacje_id = lokalizacje.id
                                          WHERE waga > 5");

                while($row = $res->fetch_array()) {
                    echo "<tr>";

                    foreach($row as $column) {
                        echo "<td>" . $column . "</td>";
                    }

                    echo "</tr>";
                }
            
            ?>
        </table>

        <?php 
            header("Refresh: 5");
        ?>
    </section>
    
    <section id="right">
        <img src="obraz2.jpg" alt="tir" id="img-tir">
    </section>
    
    <footer>
        <p>Stronę wykonał: 00000000000000000000</p>
    </footer>
</body>
</html>

<?php 

$db->close();

?>