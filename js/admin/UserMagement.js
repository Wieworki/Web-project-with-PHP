function tableCreate() {                                  
    addTHead("userTable",["Nombre de usuario","Nombre","Apellido","Email","Opciones"]);    //Table thead
    userTable.createTBody();                                                              //Table tbody
    loadUserTable();
  }

function addTHead(tableId,textarray){
  var table = document.getElementById(tableId);
  var header = table.createTHead();
  var auxRow = header.insertRow(0);    
  for (let i = 0; i < textarray.length; i++) {
    var auxCell = auxRow.insertCell();                             //New cell
    auxCell.appendChild(document.createTextNode(textarray[i]));    //Cell text
    auxCell.className  = "cellStlye";
  }
}

function addRow(tableid,textarray){
  //Each new row goes into tbody
    var auxTable = document.getElementById(tableid);
    var tbodyRef = auxTable.getElementsByTagName('tbody')[0];
    var auxRow = tbodyRef.insertRow();                                 //New row on tbody
    for (let i = 0; i < textarray.length; i++) {
        var auxCell = auxRow.insertCell();                             //New cell
        auxCell.appendChild(document.createTextNode(textarray[i]));    //Cell text
        auxCell.className  = "cellStlye";
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

function addNewUserRow(){
  var auxTable = document.getElementById("userTable");
  var auxRow = auxTable.insertRow();                      //New row

  var buttonNew = content.document.createElement('button');         //New button
  buttonNew.addEventListener("click", showNewUserTable);                  //On click function
  buttonNew.innerText = "Nuevo usuario";                            //Button label
  buttonNew.id = "buttonNew";
  buttonNew.style.margin = "0.5vh 1vw 0.5vh 1vw";
  var buttonCell = auxRow.insertCell();                    
  buttonCell.style.textAlign = "center";
  buttonCell.appendChild(buttonNew);
}


function showNewUserTable(){
  document.getElementById("tableUbication").hidden = true;
  document.getElementById("newUserUbication").hidden = false;
}

function showUserList(){
  document.getElementById("tableUbication").hidden = false;
  document.getElementById("newUserUbication").hidden = true;
  emptyUserTable();
  loadUserTable();
}

function submitNewUserAction(event){
  event.preventDefault();
  addNewUser();
}

function addNewUser(){
  $( "#createNewUserSubmit" ).prop( 'disabled', true );
  $( "#createNewUserGoBack" ).prop( 'disabled', true );
  $("#newUserText").text("Creando usuario..");
  //Ajax
  var newUserName = $("#newUsernameInput").val();
  var newPassword = $("#newPasswordInput").val();
  var newName = $("#newNameInput").val();
  var newLastName = $("#newLastNameInput").val();
  var newEmail = $("#newEmailInput").val();
  $.ajax({
    type: "POST",   
    url: "newUser.php",
    data: {
      userName: newUserName,
      password: newPassword,
      userFirstName: newName,
      userLastName: newLastName,
      userEmail: newEmail  
    },
    success: function( result ) {
      $("#newUserText").text("Usuario creado correctamente");
      $( "#createNewUserSubmit" ).prop( 'disabled', false );
      $( "#createNewUserGoBack" ).prop( 'disabled', false );
    }
  });    
}

function deleteUser(){
  alert("eliminar usuario");
  return;
  $.ajax({
    type: "POST",   
    url: "seeError.php",
    data: {
    },
    success: function( result ) {
      alert(result);
    }
  }); 
}

function editUser(){
  alert("Editar usuario");
}

function emptyUserTable(){
  //We remove all the rows with user data
  $("#userTable tbody tr").remove();
}

function loadUserTable(){
  $("#loadStatus").text("Cargando tabla");
    //We recover by a PHP the users from the database
    $.ajax({
        type: "POST",   
        url: "userTable.php",
        data: {
        },
        success: function( result ) {
          var usuarios = JSON.parse(result);          //Array with users username, name and lastname
          for (let i = 0; i < usuarios.length; i++) {
            addRow("userTable",[usuarios[i].username,usuarios[i].nombre,usuarios[i].apellido,usuarios[i].email]);
          }
          addOptionsButtons("userTable");
          addNewUserRow();
          $("#loadStatus").text("");
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
  