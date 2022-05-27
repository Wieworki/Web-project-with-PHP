<?php
    //The main page doesn´t require autentication for most of the options
    //For admins, it will show two more options on the nav bar
    session_start(); 
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        //If the user already was logged
        include "templates/admin/MainPage.html";
        die();
    } else {
        //If it wasn´t
        include "templates/MainPage.html";
        die;
    }
?>