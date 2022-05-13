<?php
    session_start();  
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        //If it wasn´t, we render the login forms
        include "../templates/Login.html";
    } else {
        //If the user isn´t autenticated, we send him to the login page
        header("Location: php/Login.php");
    }
    die();        
?>