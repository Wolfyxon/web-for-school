<?php
    $db = new mysqli("localhost", "root", null, "piekarnia");
    $db->set_charset("utf8");
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>PIEKARNIA</title>

        <meta charset="utf-8">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <img id="banner" src="wypieki.png" alt="Produkty naszej piekarni">
        <nav>
            <?php
                for($i = 1; $i <= 4; $i++) {
                    echo "
                        <a href='kw$i.png'>KWERENDA$i </a>
                    ";
                }
            ?>
        </nav>
        <header>
                <h1>WITAMY</h1>
                <h4>NA STRONIE PIEKARNI</h4>

                <p>
                    Od 31 lat oferujemy najwyższej jakości pieczywo. Naturalnie świeże, naturalnie smaczne. 
                    Pieczemy wyłącznie wypieki na naturalnym zakwasie bez polepszaczy i zagęstników. 
                    Korzystamy wyłącznie z najlepszych ziaren pochodzących z ekologicznych upraw położonych w rejonach zgierskim i ozorkowskim.
                </p>
        </header>

        <div id="main">
                <h4>Wybierz rodzaj wypieków</h4>

                <form method="post" target="_self">
                    <select name="type">
                        <?php
                            $res = $db->query("SELECT DISTINCT Rodzaj FROM wyroby ORDER BY Rodzaj DESC");

                            while($row = $res->fetch_assoc()) {
                                $name = $row["Rodzaj"];
                                echo "<option>$name</option>";
                            }
                        ?>
                    </select>
                    <input type="submit" value="Wybierz">
                </form>

                <table>
                    <tr>
                        <th>Rodzaj</th>
                        <th>Nazwa</th>
                        <th>Gramatura</th>
                        <th>Cena</th>
                    </tr>
                    <?php
                        $type = $_POST["type"] ?? null;
                        
                        if(isset($type)) {
                            $stm = $db->prepare("SELECT Rodzaj, Nazwa, Gramatura, Cena FROM wyroby WHERE Rodzaj = ?");
                            $stm->execute([$type]);
                            $res = $stm->get_result();

                            while($row = $res->fetch_array(MYSQLI_ASSOC)) {
                                echo "<tr>";

                                foreach($row as $field) {
                                    echo "
                                        <td>$field</td>
                                    ";
                                }

                                echo "</tr>";
                            }
                        }
                    ?>
                </table>
        </div>
        
        <footer>
            <p>AUTOR: 000000000000000</p>
            <p>Data: 15.05.2025</p>
        </footer>
    </body>
</html>

<?php 
    $db->close();
?>