<!DOCTYPE HTML>
<html lang="pl-PL">
    <head>
        <meta charset="UTF-8">
        <title>Forum o psach</title>
        <link rel="stylesheet" href="styl5.css">
    </head>
    <body>
        <section class="baner">
            <h1>Forum wielbicieli psów</h1>
        </section>
        <section class="lewy">
            <img src="obraz.jpg" alt="foksterier">
        </section>
        <section class="prawy1">
            <h2>Zapisz się</h2>
            <form method="post">
                <label>login: <input name="login"></label><br>
                <label>hasło: <input type="password" name="haslo"></label><br>
                <label>powtórz hasło: <input type="password" name="powtorzHaslo"></label>
                <button type="submit">Zapisz</button>
            </form>
            
            <?php
                $db = new mysqli("localhost", "root", null, "psy");

                function user_exists($login) {
                    global $db;

                    $stm = $db->prepare("SELECT login FROM uzytkownicy WHERE login=?");
                    $stm->execute([$login]);

                    return $stm->get_result()->fetch_assoc() != null;
                }

                function get_status() {
                    global $db;

                    $login = $_POST["login"] ?? null;
                    $pass1 = $_POST["haslo"] ?? null;
                    $pass2 = $_POST["powtorzHaslo"] ?? null;
                    
                    if(!$login || !$pass1 || !$pass2) {
                        return "wypełnij wszystkie pola";
                    }

                    if(user_exists($login)) {
                        return "login występuje w bazie danych, konto nie zostało dodane";
                    }

                    if($pass1 != $pass2) {
                        return "hasła nie są takie same, konto nie zostało dodane";
                    }

                    $stm = $db->prepare("INSERT INTO uzytkownicy (login, haslo) VALUES (?, ?)");
                    $stm->execute([$login, sha1($pass1)]);

                    return "Konto zostało dodane";
                }

                $status = get_status();

                if($status) {
                    echo("<p>$status</p>");
                }

                $db->close();
            ?>

        </section>
        <section class="prawy2">
            <h2>Zapraszamy wszystkich</h2>
            <ol>
                <ul>właścicieli psów</ul>
                <ul>weterynarzy</ul>
                <ul>tych, co chcą kupić psa</ul>
                <ul>tych, co lubią psy</ul>
            </ol>
            <a href="regulamin.html">Przeczytaj regulamin forum</a>
        </section>
        <footer>
            Stronę wykonał: XYZ
        </footer>
    </body>
</html>