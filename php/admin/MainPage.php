<?php
        session_start(); 
        if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] != true) {
            //If user isnt logged
            header("Location: /index.php");
            die();
        } 
?>


<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <script src="https://code.jquery.com/jquery-3.5.0.js"></script>    
        <script type="text/javascript" src="/js/admin/MainPage.js"></script>
        <script type="text/javascript" src="/js/Catalog.js"></script>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="/css/NavBar.css">
        <link rel="stylesheet" type="text/css" href="/css/MainPage.css">         

        <title>GoGoGo Manga & Comic Store</title>
    </head>
    <body>
        <header>
                <div id="navBarUbication"></div>
                <img src="../img/gogogo manga y comics store - logo sin fondo.png" height="100px">
        </header>
        <main class="container" style="overflow: auto">
           
        <div id="catalogUbication">

            <table id="catalogTable" class="table">
                
                <thead>
                    <tr>
                        <th onclick="sortyByTitle()" style="cursor: pointer;">Manga/Comic</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Portada</th>
                    </tr>
                </thead>

                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>

                <tfoot>
                    <tr>
                    <th colspan="4">
                        <button id="previousPageButton" class="btn btn-primary" onclick="previousPage()">Anterior</button>
                        <button id="nextPageButton" class="btn btn-primary" onclick="nextPage()">Siguiente</button>
                        <br><span id="pageNumber"></span>
                    </th>
                    </tr>
                </tfoot>

            </table>
            <div>
               <p id="loadStatus" style="text-align: center;"></p>
            </div>
            </div>
        </main>
    </body>
</html>