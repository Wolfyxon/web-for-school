<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logging out...</title>
</head>
<body>
    Logging out...

    <?php 
        include "../main.php";

        set_auth("", "");
        
        header("Location: ../index.php");
        die();
    ?>
</body>
</html>