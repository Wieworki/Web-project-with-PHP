<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        if( (isset($_POST['id'])) && (isset($_POST['userName']))  && (isset($_POST['userFirstName']))  && (isset($_POST['userLastName'])) && (isset($_POST['userEmail'])) ) {
            include "../conection/mysqli.php"; //Database conection
            $userID = $_POST['id'];
            $userName = $_POST['userName'];
            $userFirstName = $_POST['userFirstName'];
            $userLastName = $_POST['userLastName'];
            $userEmail = $_POST['userEmail'];
            $result = prepared_query($db, "UPDATE user SET username = ?, nombre = ?, apellido = ?, email = ? WHERE id = ?",[$userName, $userFirstName,  $userLastName, $userEmail, $userID]);
            echo("User updated");
        }
    }else{
        echo("Usuario invalido");
    }
?>