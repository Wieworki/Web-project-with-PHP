function tableCreate() {                                  
    addTHead("userTable",["Nombre de usuario","Nombre","Apellido","Email","Opciones"]);    //Table thead
    userTable.createTBody();                                                              //Table tbody
    loadUserTable(false);
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

function addOptionsButtons(tableid,buttonValue){

  var auxTable = document.getElementById(tableid);
  var buttonCell = auxTable.rows[auxTable.rows.length-1].insertCell();            //New cell
  buttonCell.style.width = "20vw";
  buttonCell.style.textAlign = "center";
  buttonCell.style.border = '1px solid black';

  var buttonEdit = document.createElement('button');  //New button
  buttonEdit.addEventListener("click", setEditUserTable);             //On click function
  buttonEdit.innerText = "Editar";                            //Button label
  buttonEdit.value = buttonValue;                             //User id - row position
  buttonEdit.style.margin = "0.5vh 1vw 0.5vh 1vw";
  buttonCell.appendChild(buttonEdit);

  var buttonDelete = document.createElement('button');
  buttonDelete.addEventListener("click", deleteUser);
  buttonDelete.innerText = "Eliminar";
  buttonDelete.value = buttonValue;                                        
  buttonDelete.style.margin = "0.5vh 1vw 0.5vh 1vw";
  buttonCell.appendChild(buttonDelete);

}

function addNewUserRow(){
  var auxTable = document.getElementById("userTable");
  var auxRow = auxTable.insertRow();                      //New row

  var buttonNew = document.createElement('button');         //New button
  buttonNew.addEventListener("click", showNewUserTable);            //On click function
  buttonNew.innerText = "Nuevo usuario";                            //Button label
  buttonNew.id = "buttonNew";
  buttonNew.style.margin = "0.5vh 1vw 0.5vh 1vw";

  var buttonCell = auxRow.insertCell();                    
  buttonCell.style.textAlign = "center";
  buttonCell.appendChild(buttonNew);

}

function showNewUserTable(){
  $("#loadStatus").text("");
  $("#mainTitle").text("NUEVO USUARIO");                    
  document.getElementById("tableUbication").hidden = true;
  document.getElementById("newUserUbication").hidden = false;

  //User properties
  document.getElementById("newUsernameInput").value = "";
  document.getElementById("newPasswordInput").value = "";
  document.getElementById("newPasswordCell").hidden = false;
  document.getElementById("newPassWordColumn").hidden = false;
  document.getElementById('newPasswordInput').disabled = false;
  document.getElementById("newNameInput").value = "";
  document.getElementById("newLastNameInput").value = "";
  document.getElementById("newEmailInput").value = "";

  //Button text
  document.getElementById("singleUserSubmit").innerHTML = "Crear";

  //Form
  document.getElementById("singleUserForm").setAttribute("onSubmit","submitNewUserAction(event)");
  $("#loadStatus").text("");
}

function showUserList(){
  document.getElementById("tableUbication").hidden = false;
  document.getElementById("newUserUbication").hidden = true;
  emptyUserTable();
  loadUserTable(false);
}

function submitNewUserAction(event){
  event.preventDefault();
  addNewUser();
}

function addNewUser(){
  $( "#singleUserSubmit" ).prop( 'disabled', true );
  $( "#singleUserGoBack" ).prop( 'disabled', true );
  $("#loadStatus").text("Creando usuario..");
  //Ajax
  var newUserName = $("#newUsernameInput").val();
  var newPassword = $("#newPasswordInput").val();
  var newName = $("#newNameInput").val();
  var newLastName = $("#newLastNameInput").val();
  var newEmail = $("#newEmailInput").val();
  $.ajax({
    type: "POST",   
    url: "../../php/admin/newUser.php",
    data: {
      userName: newUserName,
      password: newPassword,
      userFirstName: newName,
      userLastName: newLastName,
      userEmail: newEmail  
    },
    success: function( result ) {
      if(result.includes("User inserted")){
        $("#loadStatus").text("Usuario creado correctamente");
        $( "#singleUserSubmit" ).prop( 'disabled', false );
        $( "#singleUserGoBack" ).prop( 'disabled', false );
      }else{
        if(result.includes("Duplicated entry")){
          $("#loadStatus").text("Datos duplicados con otro usuario");
          $( "#singleUserSubmit" ).prop( 'disabled', false );
          $( "#singleUserGoBack" ).prop( 'disabled', false );
        }else{
          $("#loadStatus").text("Hubo un problema en la acción");
          $( "#singleUserSubmit" ).prop( 'disabled', false );
          $( "#singleUserGoBack" ).prop( 'disabled', false );        
        }
      }
    }
  });    
}

function deleteUser(){
  var auxDeletion = confirm("Está seguro que desea eliminar el usuario?");
  if(auxDeletion){
    $("#loadStatus").text("Cargando...");
    $(':button').prop('disabled', true);              //Disable all the buttons
    var auxData = $(this).attr("value").split("-");
    var deleteId = auxData[0];                        //ID of user to edit
    $.ajax({
      type: "POST",   
      url: "../../php/admin/deleteUser.php",
      data: {
        id: deleteId
      },
      success: function( result ) {
        if(result.includes("User deleted")){
          $(':button').prop('disabled', false); // Enable all the button
          emptyUserTable();
          loadUserTable(true);
          $("#loadStatus").text("Usuario eliminado correctamente");
        }else{
          alert("Hubo un problema en la acción");
          $(':button').prop('disabled', false); // Enable all the button
        }
      }
    });  
  }
}

function editUser(event){
  event.preventDefault();
  $( "#singleUserSubmit" ).prop( 'disabled', true );
  $( "#singleUserGoBack" ).prop( 'disabled', true );
  $("#loadStatus").text("Guardando cambios..");
  var editID = document.getElementById("singleUserSubmit").value;
  var editUsername = document.getElementById("newUsernameInput").value;
  var editName = document.getElementById("newNameInput").value;
  var editLastName = document.getElementById("newLastNameInput").value;
  var editEmail = document.getElementById("newEmailInput").value;
  
  $.ajax({
    type: "POST",   
    url: "../../php/admin/editUser.php",
    data: {
      id: editID,
      userName: editUsername,
      userFirstName: editName,
      userLastName: editLastName,
      userEmail: editEmail  
    },
    success: function( result ) {
      if(result.includes("User updated")){
        $("#loadStatus").text("Usuario editado correctamente");
        $( "#singleUserSubmit" ).prop( 'disabled', false );
        $( "#singleUserGoBack" ).prop( 'disabled', false );
      }else{
        if(result.includes("Duplicated entry")){
          $("#loadStatus").text("Datos duplicados con otro usuario");
          $( "#singleUserSubmit" ).prop( 'disabled', false );
          $( "#singleUserGoBack" ).prop( 'disabled', false );
        }else{
          $("#loadStatus").text("Hubo un problema en la acción");
          $( "#singleUserSubmit" ).prop( 'disabled', false );
          $( "#singleUserGoBack" ).prop( 'disabled', false );
        }
      }
    }
  });  
}

function setEditUserTable(){
  $("#loadStatus").text("");
  $("#mainTitle").text("EDITAR USUARIO");                    
  var auxData = $(this).attr("value").split("-");
  var userId = auxData[0];                        //ID of user to edit
  var userRow = auxData[1];
  var tableId = document.getElementById('userTable');
  var auxUsername = tableId.tBodies[0].rows[userRow].cells[0].innerHTML;
  var auxName = tableId.tBodies[0].rows[userRow].cells[1].innerHTML;
  var auxLastName = tableId.tBodies[0].rows[userRow].cells[2].innerHTML;
  var auxEmail = tableId.tBodies[0].rows[userRow].cells[3].innerHTML;

  document.getElementById("tableUbication").hidden = true;
  document.getElementById("newUserUbication").hidden = false;

  //User properties
  document.getElementById("newUsernameInput").value = auxUsername;
  document.getElementById("newPasswordCell").hidden = true;
  document.getElementById("newPassWordColumn").hidden = true;
  document.getElementById('newPasswordInput').disabled = true;
  document.getElementById("newNameInput").value = auxName;
  document.getElementById("newLastNameInput").value = auxLastName;
  document.getElementById("newEmailInput").value = auxEmail;

  //Button
  document.getElementById("singleUserSubmit").innerHTML = "Editar";
  document.getElementById("singleUserSubmit").value = userId;

  //Form
  document.getElementById("singleUserForm").setAttribute("onSubmit","editUser(event)");
  $("#loadStatus").text("");
}

function emptyUserTable(){
  //We remove all the rows with user data
  $("#userTable tbody tr").remove();
}

function loadUserTable(afterDelete){
    $("#mainTitle").text("LISTA DE USUARIOS");                    
    $("#loadStatus").text("Cargando tabla");
    //We recover by a PHP the users from the database
    $.ajax({
        type: "POST",   
        url: "../../php/admin/userTable.php",
        data: {
        },
        success: function( result ) {
          if(result.includes("Tabla vacía")){
            $("#loadStatus").text("Tabla sin datos");
          }else{
            if(result.includes("Error")){
              $("#loadStatus").text("Error en la búsqueda");
            }else{
              if(afterDelete){
                $("#loadStatus").text("Usuario eliminado correctamente");
              }else{
                $("#loadStatus").text("");
              }
              var usuarios = JSON.parse(result);          //Array with users username, name and lastname
              for (let i = 0; i < usuarios.length; i++) {
                addRow("userTable",[usuarios[i].username,usuarios[i].nombre,usuarios[i].apellido,usuarios[i].email]);
                addOptionsButtons("userTable",usuarios[i].id + "-" + String(i));          //We send the user id, and the row position for this user
              }
              addNewUserRow();
            }
          }
        },
        error: function (result) {
          $("#loadStatus").text("Error");
        }
      });    
}

$(document).ready(function() {
    $(function(){
        //NavBar 
        $( "#navBarUbication" ).load( "/php/NavBar.php", function() {
            //
          });
      });
      
      tableCreate();
  });
  