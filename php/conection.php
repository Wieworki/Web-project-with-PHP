<?php
    /*Check path to ini file

    $inipath = php_ini_loaded_file();

    if ($inipath) {
        echo 'Loaded php.ini: ' . $inipath;
    } else {
        echo 'A php.ini file is not loaded';
    }
    
    */
    
    //PHP info
    //phpinfo();

    /*//Var dump to check if the function exists
    var_dump(function_exists('mysqli_connect'));
    */

    //Remember to enable "extension=mysqli" on php.ini
    $host = '127.0.0.1';
    $port = 3306;
    $dbname = 'test';
    $user = 'root';
    $pass = '';
    $charset = 'utf8mb4';

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);  //Shows detailed errors
    try {
        $db = new mysqli($host, $user, $pass, $dbname, $port);
        $db->set_charset($charset);                             //Fixes problems with characters
        $db->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
    } catch (\mysqli_sql_exception $e) {
        throw new \mysqli_sql_exception($e->getMessage(), $e->getCode());
    }
    unset($host, $dbname, $user, $pass, $charset, $port); // we don't need them anymore
 ?> 