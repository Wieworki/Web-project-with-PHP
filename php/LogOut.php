<?php
    session_start();                    

    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        unset($_SESSION["user"]);     //Cerramos la sesion
        unset($_SESSION["loggedin"]);     //Cerramos la sesion
    }

    header("Location: ../index.php");
    exit;
?>