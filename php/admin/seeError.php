<?php
    session_start();   
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        include "../conection/mysqli.php"; //Database conection
       
        echo($db->sqlstate);

        /*$error_message = mysqli_error($db);
        if($error_message == ""){
            echo "No error related to SQL query.";
        }else{
            echo "Query Failed: ".$error_message;
        }
        
        if ($mysqli->connect_errno) {
            printf("Connect failed: %s\n", $mysqli->connect_error);
            exit();
        }*/
        

    }else{
        echo("Usuario invalido");
    }
?>