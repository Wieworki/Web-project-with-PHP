<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        if( (isset($_POST['nombre'])) && (isset($_POST['descripcion']))  && (isset($_POST['url_imagen']))  && (isset($_POST['id_editorial'])) ) {
            //For a successful insertion the parameters needed are
            //'nombre' -> the manga name
            //'description' -> a description of the manga. It can be empty
            //'url_imagen' -> the url of an ilustrative image
            //'id_editorial' -> foreign key to a row in the table "editorial", referencing the id column
            include "../conection/mysqli.php"; //Database conection
            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $url_imagen = $_POST['url_imagen'];
            $id_editorial = $_POST['id_editorial'];
            $result = prepared_query($db, "INSERT into manga (nombre, descripcion, url_imagen, id_editorial) VALUES (?, ?, ?, ?)",[$nombre, $descripcion, $url_imagen,  $id_editorial]);
            switch($errorMessage){
                case "":
                    echo("Manga insertado");
                    break;
                case "duplicated entry":
                    echo("El manga ya existe");                   
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