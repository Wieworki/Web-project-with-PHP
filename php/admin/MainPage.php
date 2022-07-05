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
        
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script> 
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script> 
        <script type="text/javascript" src="/js/Catalog.js"></script>  
        <script type="text/javascript" src="/js/admin/MainPage.js"></script>
                
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="/css/MainPage.css">         

        <title>GoGoGo Manga & Comic Store</title>

    </head>

    <main>

        <div id="navBarUbication"></div>

        <div id="container" style="overflow: auto">

        <header>

            <img src="/img/gogogo manga y comics store - logo sin fondo.png" height="100px">

        </header>

        <body>

            <div class="MainWrapper">
                
                <div class="ui-widget">
                    <input id="tags" placeholder="Buscador">
                    <button id="searchButton" class="btn btn-black" onclick="searchTitleOnCatalog()">Buscar</button>
                    <button id="clearFilterButton" class="btn btn-black" onclick="clearFilter()">Limpiar</button>
                </div>

                <div id="catalogUbication">

                    <table id="catalogTable" class="table">
                        
                        <thead>
                            <tr>
                                <th onclick="sortyByTitle()" style="cursor: pointer; width: auto;">Título</th>
                                <th>Volumen</th>
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
                                <th colspan="5">
                                    <button id="previousPageButton" class="btn btn-black" onclick="previousPage()">Anterior</button>
                                    <button id="nextPageButton" class="btn btn-black" onclick="nextPage()">Siguiente</button>
                                    <br><span id="pageNumber"></span>
                                </th>
                            </tr>
                        </tfoot>

                    </table>

                </div>

            </div>

        </body>

        </div>

    <footer>
       <p id="loadStatus"></p>
    </footer>

    </main>

</html>