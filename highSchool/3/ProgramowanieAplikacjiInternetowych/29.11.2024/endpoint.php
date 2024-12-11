<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <form>
            <?php
                $langs = $_POST["langs"] ?? [];
                $name = $_POST["secondName"] ?? "Anonim";

                function field($name, $displayName) {
                    $val = $_POST[$name] ?? "Brak";

                    if(empty($val)) {
                        $val = "Brak";
                    }
                    
                    echo "<div>";
                    echo "<span>" . $displayName . ": </span>";
                    echo "<span>" . $val . "</span>";
                    echo "</div>";
                }

                if($_POST["privacy"] ?? false) {
                    echo "<p>Rejestracja przebiegła pomyślnie</p>";

                    field("secondName", "Nazwisko");
                    field("name", "Imię");
                    field("job", "Zawód");
                    field("email", "E-mail");
                    field("education", "Wykształcenie");

                    echo "<p>Znajomość języków:</p>";

                    if(count($langs) != 0) {
                        echo "<ul>";

                        foreach ($langs as $k => $v) {
                            echo "<li>" . $v . "</li>";
                        }
        
                        echo "</ul>";
                    } else {
                        echo $name . " nie zna żadnych języków";
                    }
                } else {
                    echo "<p>Nie wyrażono zgody na przetwarzanie danych</p>";
                    http_response_code(400);
                }

            ?>
        </form>
    </body>
</html>