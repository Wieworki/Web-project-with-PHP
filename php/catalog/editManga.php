<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        if( (isset($_POST['id'])) && (isset($_POST['nombre'])) && (isset($_POST['descripcion']))  && (isset($_POST['url_imagen']))  && (isset($_POST['id_editorial'])) ) {
            //Parameters needed
            //'nombre' -> the manga name
            //'description' -> a description of the manga. It can be empty
            //'url_imagen' -> the url of an ilustrative image
            //'id_editorial' -> foreign key to a row in the table "editorial", referencing the id column
            include "../conection/mysqli.php"; //Database conection
            $id = $_POST['id'];
            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $url_imagen = $_POST['url_imagen'];
            $id_editorial = $_POST['id_editorial'];
            prepared_query($db, "UPDATE manga SET nombre = ?, descripcion = ?, url_imagen = ?, id_editorial = ? WHERE id = ?",[$nombre, $descripcion,  $url_imagen, $id_editorial, $id]);
            switch($errorMessage){
                case "":
                    echo("Manga editado");
                    break;
                case "duplicated entry":
                    echo("El nombre del manga ya existe");                   
                    break; 
                case "error in foreign key constraint":
                    echo("El valor puesto en editorial no existe en la base de datos");
                    break;
                default:
                    echo($errorMessage);
                    break;
            }
        }
    }else{
        echo("Usuario invalido");
    }
?>