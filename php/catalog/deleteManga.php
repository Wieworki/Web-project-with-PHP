<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        if(isset($_POST['id'])) {
            include "../conection/mysqli.php"; //Database conection
            $mangaID = $_POST['id'];
            //Query to check if there is a manga with the id provided
            $result = prepared_select($db, "SELECT * FROM manga WHERE id = ?",[$mangaID]);
            $aux = array();
            while ($manga = $result->fetch_assoc()) {
                $aux[] = $manga;
            }
            if(empty($aux)){
                echo("ID non existent");
            }else{
                $result = prepared_query($db, "DELETE FROM manga WHERE id = ?",[$mangaID]);
                switch($errorMessage){
                    case "":
                        echo("Manga deleted");
                        break;
                    default:
                        echo($errorMessage);
                        break;
                }
            }
        }
    }else{
        echo("Usuario invalido");
    }
?>