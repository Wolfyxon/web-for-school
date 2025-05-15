<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Log in</title>
</head>
<body>
    <h1>Log in</h1>

    <form action="api/login.php" method="post">
        <label>Username:</label> <br>
        <input type="text" name="username"> <br>

        <label>Password:</label> <br>
        <input type="password" name="password"> <br>

        <input type="submit" value="Log in">
    </form>
</body>
</html>