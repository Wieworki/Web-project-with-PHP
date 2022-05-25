<?php
    /*session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        include "../conection/mysqli.php"; //Database conection
        $result = prepared_select($db, "SELECT id, username, nombre, apellido, email FROM user",[]);
        $users = array();
        if(empty($result)){
            echo("Tabla vacía");
        }else{
            if($errorMessage == ""){                    //No errors
                while ($user = $result->fetch_assoc()) {
                    $users[] = $user;
                }
                echo json_encode($users);            
            }else{
                echo("Error");
            }
        }
    }else{
        echo("Usuario invalido");
    }*/
    $catalog = array (
        0 => array("id" => "1", "nombre" => "naruto", "descripcion" => "manga1", "precio" => "1.5", "urlPortada" => "https://www.malatintamagazine.com/wp-content/uploads/2014/10/narutoportada2.png"),
        1 => array("id" => "2", "nombre" => "naruto2", "descripcion" => "manga2", "precio" => "15", "urlPortada" => "https://i.pinimg.com/736x/91/b9/2c/91b92cf9a7c42fabc8c842e13792e219--naruto-vs-naruto-shippuden.jpg"),
        2 => array("id" => "3", "nombre" => "naruto3", "descripcion" => "manga3", "precio" => "2.5", "urlPortada" => "https://i.pinimg.com/originals/3e/3c/8d/3e3c8d1fb08120b611a3cc99f8c50b8c.jpg")
    );
    echo json_encode($catalog); 
?>