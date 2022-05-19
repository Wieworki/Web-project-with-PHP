<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        if(isset($_POST['id'])) {
            include "../conection/mysqli.php"; //Database conection
            $userID = $_POST['id'];
            $result = prepared_query($db, "DELETE FROM user WHERE id = ?",[$userID]);
            switch($errorMessage){
                case "":
                    echo("User deleted");
                    break;
                default:
                    echo("Error");
                    break;
            }
        }
    }else{
        echo("Usuario invalido");
    }
?>