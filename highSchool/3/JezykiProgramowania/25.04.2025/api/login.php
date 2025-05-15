<?php

include "../main.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <?php 
        $username = $_POST["username"] ?? NULL;
        $password = $_POST["password"] ?? NULL;

        if(empty($username) || empty($password)) {
            echo "400: Bad request";
            http_response_code(400);
            exit();
        }
    
        if(check_auth($username, $password)) {
            set_auth($username, $password);
            header("Location: ../index.php");
        } else {
            echo "403: Unauthorized, invalid username or password";
            exit();
        }
    ?>
</body>
</html>