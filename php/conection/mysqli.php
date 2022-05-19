<?php
    //Remember to enable "extension=mysqli" on php.ini
    
    /*////Check path to ini file
    $inipath = php_ini_loaded_file();
    if ($inipath) {
        echo 'Loaded php.ini: ' . $inipath;
    } else {
        echo 'A php.ini file is not loaded';
    }
    */////////
    
    //////PHP info
    //phpinfo();

    /*////////Var dump to check if the function exists and mysqli is working
    var_dump(function_exists('mysqli_connect'));
    *////////
    include "db_credentials.php"; //Database credentials
    global $errorNumber;
    global $errorMessage;

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);  //Shows detailed errors
    try {
        $db = new mysqli($host, $user, $pass, $dbname, $port);
        $db->set_charset($charset);                             //Fixes problems with characters
        $db->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
    } catch (\mysqli_sql_exception $e) {
        throw new \mysqli_sql_exception($e->getMessage(), $e->getCode());
    }
    unset($host, $dbname, $user, $pass, $charset, $port); // we don't need them anymore

    //Functions

    function prepared_query($mysqli, $sql, $params, $types = "")
    {
        $types = $types ?: str_repeat("s", count($params)); //Type "s" is string

        try{
            $stmt = $mysqli->prepare($sql);
        }
        catch (Exception $e) {
            $errorNumber = $e->getCode();
            errorHandler($errorNumber, $errorMessage);
            return $errorMessage;
        }

        if(!empty($params)){                        //If we recieve params, we bind them
            $stmt->bind_param($types, ...$params);  //First tell the type of the params, after that tell the params
        }

        try{
            $stmt->execute();
        }
        catch (Exception $e) {
            $errorNumber = $e->getCode();
            errorHandler($errorNumber, $errorMessage);
            return $errorMessage;
        }
        return $stmt;
    }

    function prepared_select($mysqli, $sql, $params = [], $types = "") {
        $query = prepared_query($mysqli, $sql, $params, $types);
        if($query != ""){
            return $query->get_result();
        }
    }

    function errorHandler($errorNumber,&$errorMessage){
        switch($errorNumber){
            case "1062":
                $errorMessage = "Entrada duplicada";
                break;
            case "1064":
                $errorMessage = "Error de sintaxis en el query";
                break;                    
            default:
                $errorMessage = "error code: ".$e->getCode();
                break;
        }
    }

    function getUserData($db, $id) {
        $stmt = $db->prepare("SELECT * FROM user WHERE id=?");
        $stmt->bind_param("s", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
 ?> 