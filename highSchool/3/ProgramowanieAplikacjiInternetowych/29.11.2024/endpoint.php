<?php
    function data($field) {
        $val = $_POST[$field];

        if($val == NULL || empty($val)) {
            return "Brak";
        }

        return $val;
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <form>
            <p>Rejestracja przebiegła pomyślnie</p>

            <div>
                <span>Nazwisko: </span> 
                <span><?php echo data("secondName"); ?></span>
            </div>
            <div>
                <span>Imię: </span> 
                <span><?php echo data("firstName"); ?></span>
            </div>
            <div>
                <span>Zawód: </span> 
                <span><?php echo data("job"); ?></span>
            </div>
            <div>
                <span>E-mail: </span> 
                <span><?php echo data("email"); ?></span>
            </div>
            <div>
                <span>Wykształcenie: </span> 
                <span><?php echo data("education"); ?></span>
            </div>

            <p>Znajomość języków:</p>
            
            <?php
                $langs = $_POST["langs"];
                $name = $_POST["secondName"] ?? "Anonim";

                if($langs !== NULL && count($langs) != 0) {
                    echo "<ul>";

                    foreach ($langs as $k => $v) {
                        echo "<li>" . $v . "</li>";
                    }
    
                    echo "</ul>";
                } else {
                    echo $name . " nie zna żadnych języków";
                }
            ?>
        </form>
    </body>
</html>