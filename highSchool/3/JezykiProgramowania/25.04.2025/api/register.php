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
        $password1 = $_POST["password1"] ?? NULL;
        $password2 = $_POST["password2"] ?? NULL;

        if(empty($username) || empty($password1) || empty($password2)) {
            echo "400: Bad request, not enough data";
            http_response_code(400);
            exit();
        }

        if($password1 !== $password2) {
            echo "400: Bad request, passwords don't match";
            http_response_code(400);
            exit();
        }

        if(strlen($username) > $max_username_len) {
            echo "400: Bad request, max username length is $max_username_len";
            exit();
        }

        if(strlen($password1) > $max_password_len) {
            echo "400: Bad request, max password length is $max_password_len";
            exit();
        }        

        if(get_user($username)) {
            echo "This user already exists";
            http_response_code(403);
            exit();
        }

        $stm = $db->prepare("INSERT INTO $users_table_name (username, password) VALUES (?, ?)");
        $stm->execute([$username, $password1]);

        set_auth($username, $password1);
        header("Location: ../index.php");
    ?>
</body>
</html>