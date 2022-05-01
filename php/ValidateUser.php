<?php
    session_start();                    //Iniciamos la sesion
    /*Validar sesion con la base de datos*/
    if(true){
        
    } 
    $_SESSION["loggedin"]="true";        //Actualizamos el array de sesiones
    $_SESSION["username"]="user";        //Actualizamos el array de sesiones
    header("Location: ../Login.php");
    exit;
?>