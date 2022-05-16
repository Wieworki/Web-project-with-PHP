<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        include "../conection/mysqli.php"; //Database conection
        $result = prepared_select($db, "SELECT username, nombre, apellido, email FROM user");

        $users = array();
        while ($user = $result->fetch_assoc()) {
            $users[] = $user;
        }
        echo json_encode($users);
    }else{
        echo("Usuario invalido");
    }
?>