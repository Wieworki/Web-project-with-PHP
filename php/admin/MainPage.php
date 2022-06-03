<?php
        session_start(); 
        if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] != true) {
            //If user isnt logged
            header("Location: /index.php");
            die();
        } 
?>


<html>
    <main>
        <header>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <script src="https://code.jquery.com/jquery-3.5.0.js"></script>    
            <script type="text/javascript" src="/js/admin/MainPage.js"></script>
            <link rel="stylesheet" type="text/css" href="/css/NavBar.css">
            <link rel="stylesheet" type="text/css" href="/css/AdminCatalog.css"> 

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/themes/redmond/jquery-ui.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">       <!-- Iconos -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.15.5/css/ui.jqgrid.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.15.5/jquery.jqgrid.min.js"></script>
        </header>
        <body>
            <head>
                <div id="navBarUbication"></div>
                <title>GOGOGO Local</title>
            </head>
            <div class="MainWrapper">
                <h1 class="MainTitle">GOGOGO Local</h1>
            </div>
            <div id="catalogUbication">
                <table id="catalogTable"></table>
            </div>
        </body>
    </main>
</html>