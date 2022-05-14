<?php
    //First we should check if a session has already been started. There are several ways
    /* session_status returns the state of the current session
    if(session_status() == PHP_SESSION_ACTIVE){
        echo("Sesion activa");        
    }else{
        echo("Sesion inactiva");
    }*/

    //Another way is checking for a specific session, with isset
    /*if(isset($_SESSION["Current"])){
        echo("Sesion activa");        
    }else{
        echo("Sesion inactiva");
    }*/

    session_start();                    //Iniciamos la sesion
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        //If the user already was logged
        header("Location: ../index.php");
        die();
    } else {
        //If it wasn´t, we render the login forms
        include "../templates/Login.html";
    }
?>