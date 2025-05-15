<?php
    $db = new mysqli("localhost", "root", null, "piekarnia");

?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>PIEKARNIA</title>

        <meta charset="utf-8">
        <link rel="stylesheet" href="styles.css">
    </head>
</html>

<?php 
    $db->close();
?>