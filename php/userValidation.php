<?php
    session_start();   
    if(isset($_POST['userName']) && isset($_POST['userPass'])){
        include "conection/mysqli.php"; //Database conection

        $userName=$_POST['userName'];
        $UserPass=$_POST['userPass'];

        $user = prepared_select($db, "SELECT * FROM user WHERE username=?", [$userName])->fetch_assoc();
        switch($errorMessage){
            case "":            //No error
                break;
            default:
                echo("Uncatched error");
                die;
                break;
        }

        if(empty($user)){                   //No results found for the username
            echo("USER NOT VALIDATED");            
        }else{
            $db_userpassword = $user["password"];      //Hashed password
            if(password_verify($UserPass, $db_userpassword)) {
                $_SESSION["loggedin"]="true";           //Actualizamos el array de sesiones
                $_SESSION["username"]= $userName;        //Actualizamos el array de sesiones
                echo("USER VALIDATED");
            }else{
                echo("USER NOT VALIDATED");
            }
        } 
    }
?>