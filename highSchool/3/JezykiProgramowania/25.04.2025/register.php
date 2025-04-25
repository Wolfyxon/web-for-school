<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Register</title>
</head>
<body>
    <h1>Create an account</h1>
    
    <form action="api/register.php" method="post">
        <label>Username:</label> <br>
        <input type="text" name="username"> <br>

        <label>Password:</label> <br>
        <input type="password" name="password1"> <br>

        <label>Repeat password:</label> <br>
        <input type="password" name="password2"> <br>

        <input type="submit" value="Register">
    </form>
</body>
</html>