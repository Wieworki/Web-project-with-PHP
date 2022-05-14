function tableCreate() {
    const tableUbication = document.getElementById("tableUbication");  //Recovering the ubication div
    const userTable = document.createElement('table');                       //Creating a table
    userTable.setAttribute("id", "userTable");
    userTable.style.width = '80vw';                                          //Width
    userTable.style.border = '1px solid black';                              //Border
    userTable.style.margin = ' 5vh auto auto auto';                          //Margin auto so it is centered

    tableUbication.appendChild(userTable);
    addRow("userTable",["Nombre de usuario","Nombre","Apellido","Opciones"],"20vw");    //Columns names
    //loadUserTable();
    addOptionsButtons("userTable");
  }

function addRow(tableid,textarray,cellsWidth){
    var auxTable = document.getElementById(tableid);
    var auxRow = auxTable.insertRow();                                 //New row
    for (let i = 0; i < textarray.length; i++) {
        var auxCell = auxRow.insertCell();                             //New cell
        auxCell.appendChild(document.createTextNode(textarray[i]));    //Cell text
        auxCell.style.border = '1px solid black';
        auxCell.style.textAlign = "center";
        auxCell.style.width = cellsWidth;
    }
}

function addOptionsButtons(tableid){
    var auxTable = document.getElementById(tableid);
    for (let i = 1; i < auxTable.rows.length; i++) {                //We do this for every row after the columns names
        var buttonCell = userTable.rows[i].insertCell();            //New cell
        buttonCell.style.width = "20vw";
        buttonCell.style.textAlign = "center";
        buttonCell.style.border = '1px solid black';

        var buttonEdit = content.document.createElement('button');  //New button
        buttonEdit.onclick = function() { alert('Editar usuario'); }       //On click function
        buttonEdit.innerText = "Editar";                            //Button label
        buttonEdit.style.margin = "0.5vh 1vw 0.5vh 1vw";
        buttonCell.appendChild(buttonEdit);

        var buttonDelete = content.document.createElement('button');  //New button
        buttonDelete.onclick = function() { alert('Eliminar usuario'); }       //On click function
        buttonDelete.innerText = "Eliminar";                            //Button label
        buttonDelete.style.margin = "0.5vh 1vw 0.5vh 1vw";
        buttonCell.appendChild(buttonDelete);
    }
}

function loadUserTable(){
    addRow("userTable",["Nombre de usuario","Nombre","Apellido"],"20vw");
    addRow("userTable",["Nombre de usuario","Nombre","Apellido"],"20vw");
    //We recover by a PHP the users from the database
    $.ajax({
        type: "POST",   
        url: "../php/admin/userTable.php",
        data: {
        },
        success: function( result ) {
          if(result == " USER VALIDATED"){
            //Redirect to main page
            window.location.href = '../index.php';
          }else{
            $("#errorMessage").text("Invalid user-password");
            $( "input" ).prop( "disabled", false );
          }
        }
      });    
}

$(document).ready(function() {
    $(function(){
        //NavBar 
        $( "#navBarUbication" ).load( "navBar.html", function() {
            //We have to change the attr of the navBar
            document.getElementById("homeNavBar").setAttribute("href", "../index.php");
            document.getElementById("LogInNavBar").setAttribute("href", "../php/Login.php");
            document.getElementById("LogOutNavBar").setAttribute("href", "../php/LogOut.php");

            document.getElementById("LogInNavBar").hidden = true; //User is already logged in if is seeing the page
            document.getElementById("LogOutNavBar").hidden = false;
          });
      });
      
      tableCreate();
  });
  