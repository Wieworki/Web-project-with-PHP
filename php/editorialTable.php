<?php
    if (isset($_POST['request'])) {
        include "conection/mysqli.php"; //Database conection
        $result = prepared_select($db, "SELECT editorial.id AS id, editorial.nombre AS nombre
        FROM editorial 
        ORDER BY editorial.nombre",[]);
        $editoriales = array();
        if(empty($result)){
            echo("Tabla vacía");
        }else{
            if($errorMessage == ""){                    //No errors
                while ($editorial = $result->fetch_assoc()) {
                    $editoriales[] = $editorial;
                }
                echo json_encode($editoriales);            
            }else{
                echo("Error");
            }
        }
    }else{
        echo("Acceso inválido");
    }

    //editoriales structure
    /*$editoriales = array (
        0 => array("id" => "1", "nombre" => "ivrea"),
        1 => array("id" => "2", "nombre" => "ovni"),
        2 => array("id" => "3", "nombre" => "panini")
    );
    echo json_encode($editoriales);*/ 
?>