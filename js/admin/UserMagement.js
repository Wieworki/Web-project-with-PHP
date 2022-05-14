function tableCreate() {
    const tableUbication = document.getElementById("tableUbication");  //Recovering the ubication div
    const userTable = document.createElement('table');                       //Creating a table
    userTable.setAttribute("id", "userTable");
    userTable.style.width = '80vw';                                          //Width
    userTable.style.border = '1px solid black';                              //Border
    userTable.style.margin = ' 5vh auto auto auto';                          //Margin auto so it is centered

    tableUbication.appendChild(userTable);
    addTHead("userTable",["Nombre de usuario","Nombre","Apellido","Opciones"],"20vw");    //Table thead
    userTable.createTBody();                                                              //Table tbody
    loadUserTable();
  }

function addTHead(tableId,textarray,cellsWidth){
  var table = document.getElementById(tableId);
  var header = table.createTHead();
  var auxRow = header.insertRow(0);    
  for (let i = 0; i < textarray.length; i++) {
    var auxCell = auxRow.insertCell();                             //New cell
    auxCell.appendChild(document.createTextNode(textarray[i]));    //Cell text
    auxCell.style.border = '1px solid black';
    auxCell.style.textAlign = "center";
    auxCell.style.width = cellsWidth;
  }
}

function addRow(tableid,textarray,cellsWidth){
  //Each new row goes into tbody
    var auxTable = document.getElementById(tableid);
    var tbodyRef = auxTable.getElementsByTagName('tbody')[0];
    var auxRow = tbodyRef.insertRow();                                 //New row on tbody
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
        buttonEdit.addEventListener("click", editUser);                  //On click function
        buttonEdit.innerText = "Editar";                            //Button label
        buttonEdit.style.margin = "0.5vh 1vw 0.5vh 1vw";
        buttonCell.appendChild(buttonEdit);

        var buttonDelete = content.document.createElement('button');  //New button
        buttonDelete.addEventListener("click", deleteUser);                  //On click function
        buttonDelete.innerText = "Eliminar";                            //Button label
        buttonDelete.style.margin = "0.5vh 1vw 0.5vh 1vw";
        buttonCell.appendChild(buttonDelete);
    }
}

function addNewUserButton(){
  var auxTable = document.getElementById("userTable");
  var auxRow = auxTable.insertRow();                      //New row
  var buttonCell = auxRow.insertCell();                    //New cell

  var buttonNew = content.document.createElement('button');         //New button
  buttonNew.addEventListener("click", addNewUser);                  //On click function
  buttonNew.innerText = "Nuevo usuario";                            //Button label
  buttonNew.id = "buttonNew";
  buttonNew.style.margin = "0.5vh 1vw 0.5vh 1vw";
  buttonCell.appendChild(buttonNew);
}

function addNewUser(){
  alert("Nuevo usuario");
}

function deleteUser(){
  alert("Eliminar usuario");
}

function editUser(){
  alert("Editar usuario");
}

function loadUserTable(){
    //We recover by a PHP the users from the database
    $.ajax({
        type: "POST",   
        url: "userTable.php",
        data: {
        },
        success: function( result ) {
          var usuarios = JSON.parse(result);          //Array with users username, name and lastname
          for (let i = 0; i < usuarios.length; i++) {
            addRow("userTable",[usuarios[i].username,usuarios[i].nombre,usuarios[i].apellido],"20vw");
          }
          addOptionsButtons("userTable");
          addNewUserButton();
        }
      });    
}

$(document).ready(function() {
    $(function(){
        //NavBar 
        $( "#navBarUbication" ).load( "../../templates/navBar.html", function() {
            //We have to change the attr of the navBar
            document.getElementById("homeNavBar").setAttribute("href", "../../index.php");
            document.getElementById("LogInNavBar").setAttribute("href", "../Login.php");
            document.getElementById("LogOutNavBar").setAttribute("href", "../LogOut.php");

            document.getElementById("UserManagementNavBar").hidden = false;
            document.getElementById("LogInNavBar").hidden = true; //User is already logged in if is seeing the page
            document.getElementById("LogOutNavBar").hidden = false;

            document.getElementById("homeNavBar").className = "";
            document.getElementById("UserManagementNavBar").className = "active";
          });
      });
      
      tableCreate();
  });
  