<?php 

$db = new mysqli("localhost", "root", null);
$db_name = "TestLoginPage";

$db->query(sprintf("
    CREATE DATABASE IF NOT EXISTS %s;
", $db_name));

$db->select_db($db_name);

$users_table_name = "Users";
$max_username_len = 20;
$max_password_len = 32;

$db->query("
    CREATE TABLE IF NOT EXISTS $users_table_name (
        id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
        username VARCHAR($max_username_len) NOT NULL,
        password VARCHAR($max_password_len) NOT NULL
    );
");

function check_auth($username, $password) {
    global $db, $users_table_name;

    $stm = $db->prepare("SELECT * FROM $users_table_name WHERE username = ? AND password = ?");
    $stm->execute([$username, $password]);

    return $stm->fetch() !== null;
}

function get_user($username) {
    global $db, $users_table_name;

    $stm = $db->prepare("SELECT * FROM $users_table_name WHERE username = ?");
    $stm->execute([$username]);
    
    $res = $stm->get_result();
    return $res->fetch_assoc();
}

function set_auth($username, $password) {
    setcookie("username", $username, null, "/");
    setcookie("password", $password, null, "/");
}

function is_logged_in() {
    $username = $_COOKIE["username"] ?? NULL;
    $password = $_COOKIE["password"] ?? NULL;

    if(empty($username) || empty($password)) {
        return FALSE;
    }

    return check_auth($username, $password);
}

function get_logged_user() {
    if(is_logged_in()) {
        return get_user($_COOKIE["username"]);
    }

    return null;
}

?>