<?php

include "main.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Test login website</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Test login website</h1>

    <?php
        if(is_logged_in()) {
            echo "Hi " . get_logged_user()["username"];
            echo "<br> <a href='api/logout.php'>Log out</a>";
        } else {
            echo "<a href='login.php'>Log in</a> | ";
            echo "<a href='register.php'>Register</a>";
        }
    ?>

    <h2>Registered users</h2>
    
    <table>
    <?php

        $users = $db->query("SELECT id, username FROM $users_table_name");

        foreach($users as $user) {
            echo sprintf("
                <tr>
                    <td>%d</td>
                    <td>%s</td>
                </tr>
                ", $user["id"], $user["username"]
            );
        }
    ?>
    </table>

</body>
</html>