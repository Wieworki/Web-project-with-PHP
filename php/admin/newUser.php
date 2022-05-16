<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        if( (isset($_POST['userName'])) && (isset($_POST['password']))  && (isset($_POST['userFirstName']))  && (isset($_POST['userLastName'])) && (isset($_POST['userEmail'])) ) {
            include "../conection/mysqli.php"; //Database conection
            $userName = $_POST['userName'];
            $userPassword = $_POST['password'];
            $userFirstName = $_POST['userFirstName'];
            $userLastName = $_POST['userLastName'];
            $userEmail = $_POST['userLastName'];
            $result = prepared_query($db, "INSERT into user (username, password, nombre, apellido, email) VALUES (?, ?, ?, ?, ?)",[$userName, $userPassword, $userFirstName,  $userLastName, $userEmail]);
            echo("User inserted");
        }
    }else{
        echo("Usuario invalido");
    }
?>