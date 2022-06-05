<?php
    session_start();  
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        //If the user is already logged, we show the page
        include ("/templates/admin/UserManagement.html");
    } else {
        //If the user isn´t autenticated, we send him to the login page
        header("Location: ../../php/Login.php");
    }
?>