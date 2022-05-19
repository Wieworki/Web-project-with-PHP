<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        if(isset($_POST['id'])) {
            include "../conection/mysqli.php"; //Database conection
            $userID = $_POST['id'];
            $result = prepared_update($db, "INSERT into user (username, password, nombre, apellido, email) VALUES (?, ?, ?, ?, ?)",[$userName, $userPassword, $userFirstName,  $userLastName, $userEmail]);
            if($result == "all good"){
                echo("User deleted");
            }else{
                echo($result);
            }
        }
    }else{
        echo("Usuario invalido");
    }
?>