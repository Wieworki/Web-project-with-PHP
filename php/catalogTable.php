<?php
    if (isset($_POST['request'])) {
        include "conection/mysqli.php"; //Database conection
        $result = prepared_select($db, "SELECT manga.id AS id, manga.nombre AS nombre, volumen.descripcion AS descripcion, volumen.numero AS volumen, volumen.precio AS precio, volumen.url_portada  AS urlPortada
        FROM manga 
        INNER JOIN volumen ON volumen.id_manga = manga.id
        ORDER BY manga.nombre",[]);
        if($errorMessage == ""){                    //No errors
            $catalog = array();
            while ($manga = $result->fetch_assoc()) {
                $catalog[] = $manga;
            }
            if(empty($catalog)){
                echo("Tabla vacía");
            }else{
                echo json_encode($catalog);            
            }
        }else{
            echo("Error");
        }        
    }else{
        echo("Acceso inválido");
    }

    //Catalog structure
    /*$catalog = array (
        0 => array("id" => "1", "nombre" => "Naruto", "descripcion" => "manga1", "volumen" => "1", "precio" => "1.5", "urlPortada" => "https://www.malatintamagazine.com/wp-content/uploads/2014/10/narutoportada2.png"),
        1 => array("id" => "2", "nombre" => "Naruto", "descripcion" => "manga2", "volumen" => "2", "precio" => "15", "urlPortada" => "https://i.pinimg.com/736x/91/b9/2c/91b92cf9a7c42fabc8c842e13792e219--naruto-vs-naruto-shippuden.jpg"),
        2 => array("id" => "3", "nombre" => "Naruto", "descripcion" => "manga3", "volumen" => "3", "precio" => "2.5", "urlPortada" => "https://i.pinimg.com/originals/3e/3c/8d/3e3c8d1fb08120b611a3cc99f8c50b8c.jpg")
    );
    echo json_encode($catalog);*/ 
?>