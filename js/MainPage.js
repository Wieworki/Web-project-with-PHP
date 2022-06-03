$(document).ready(function() {
    $(function(){
        //NavBar 
        $( "#navBarUbication" ).load( "/php/NavBar.php", function() {
          });
      });
    loadCatalog();
});

function loadCatalog() {                                  
    $("#loadStatus").text("Cargando tabla");
    //We recover by a PHP the users from the database
    $.ajax({
        type: "POST",   
        url: "php/catalogTable.php",
        data: {
          request: true
        },
        success: function( result ) {
          if(result.includes("Tabla vacía")){
            $("#loadStatus").text("Tabla sin datos");
          }else{
            if(result.includes("Error")){
              $("#loadStatus").text("Error en la búsqueda");
            }else{
              $("#loadStatus").text("");
              var catalogo = JSON.parse(result);          //Array with users username, name and lastname
              for (let i = 0; i < catalogo.length; i++) {
                addRow("catalogTable",[catalogo[i].nombre,catalogo[i].descripcion,catalogo[i].precio]);
                addImage("catalogTable",catalogo[i].urlPortada);
              }
            }
          }
        },
        error: function (result) {
          $("#loadStatus").text("Error");
        }
      });    
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

  function addImage(tableid,urlImage){
    //Adds a new cell with an image for the last row of tbody
    var img = document.createElement('img');
    img.src = urlImage;
    img.alt = "Imagen";
    img.className = "imgStyle";

    var auxTable = document.getElementById(tableid);
    var tbodyRef = auxTable.getElementsByTagName('tbody')[0];
    var auxRow = tbodyRef.rows[tbodyRef.rows.length-1];              //Last row
    var auxCell = auxRow.insertCell();                             //New cell
    auxCell.appendChild(img);    //Cell text
    auxCell.className  = "imgCellStyle";
  }