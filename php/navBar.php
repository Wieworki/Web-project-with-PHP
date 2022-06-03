<?php
    session_start();                    //Iniciamos la sesion
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        //If the user is logged, he can see other options in the navbar
        $logged = true;
    } else {
        $logged = false;
    }
?>

<!DOCTYPE html>

<html>
    <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../../css/NavBar.css">

    </head>

    <body>

        <nav class="navbar navbar-dark fixed-top">
            <div class="container-fluid">

                <a class="navbar-brand" href="../../index.php">
                    <img src="/img/gogogo manga y comics store - logo sin fondo 2.png" height="40" width="45">
                    <img src="/img/gogogo manga y comics store - logo sin fondo 3.png" width="150">
                </a>
            
                <div class="dropdown">

                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Opciones de usuario
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                   
                   <?php
                        if($logged){
                            //User management and log out options
                            echo("<li><a class=\"dropdown-item\" href=\"/index.php\">Catalogo de productos</a></li>");
                            echo("<li><a class=\"dropdown-item\" href=\"/php/admin/UserManagement.php\">Administrar usuarios</a></li>");
                            echo("<li><a class=\"dropdown-item\" href=\"/php/LogOut.php\">Cerrar Sesión</a></li>");
                        }else{
                            //Only log in options
                            echo("<li><a class=\"dropdown-item\" href=\"/php/Login.php\">Iniciar Sesión</a></li>");
                        }
                    ?>
                    
                    </ul>
                </div>

            </div>
        </nav>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
</html>

