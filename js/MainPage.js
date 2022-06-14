let currentCatalog = "";

$(document).ready(function() {
    $(function(){
        //NavBar 
        $( "#navBarUbication" ).load( "/php/NavBar.php", function() {   //The nav bar is the same for several pages, so we load it into the html template
          });
      });

    loadCatalog();
});

function loadSearchFunction(){
  var availableTags = currentCatalog.getCatalogNames();
  $( "#tags" ).autocomplete({
    source: availableTags
  });

  //We resize the dropdown list so it matchs the width of the autocomplete input
  jQuery.ui.autocomplete.prototype._resizeMenu = function () {
    var ul = this.menu.element;
    ul.outerWidth(this.element.outerWidth());
  }
}

function searchTitleOnCatalog(){
  let searchValue = $( "#tags" ).val();
  if(searchValue == ""){
    clearFilter();
  }else{
    filterByName(searchValue);
  }
}

function loadCatalog() {                                  
  //Ajax call to recover the product data  
  $("#loadStatus").text("Cargando tabla");
    $.ajax({
        type: "POST",   
        url: "php/catalogTable.php",
        data: {
          request: true
        },
        success: function( result ) {
          if(result.includes("Tabla vacía")){
            $("#loadStatus").text("Tabla sin datos");        //No data recovered from the DB
          }else{
            if(result.includes("Error")){
              $("#loadStatus").text("Error en la búsqueda");  //Error in the connection to the DB
            }else{
              $("#loadStatus").text("");
              catalogo = JSON.parse(result);          //Array with product name, description, price and URL for image
              currentCatalog = new Catalog(catalogo,["nombre","descripcion","precio","urlPortada"],5);  //We set the products, and the number of rows 
              loadCatalogData(currentCatalog);
            }
          }
        },
        error: function (result) {
          $("#loadStatus").text("Error");   //Error in the call to the PHP file
        }
      });    
  }

function loadCatalogData(currentCatalog){
  emptyTableData("catalogTable");
  loadRowData("catalogTable",currentCatalog);
  setPageNumber(currentCatalog);
  afterLoadData();
}

function afterLoadData(){
  //$(window).scrollTop(0);
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  loadSearchFunction();
}

function loadRowData(tableid, currentCatalog) {
  var auxTable = document.getElementById(tableid);                  //Table element
  var tbodyRef = auxTable.getElementsByTagName('tbody')[0];         //Tbody from table
  var dataToLoad = currentCatalog.getCatalogPage();                 //We recover the data for the data page from the catalog object
  for (let i = 0; i < dataToLoad.length; i++) {
    var currentRow = tbodyRef.rows[i];
    for (let j = 0; j < 3; j++) {                                      //The first 3 elements are text data
      var auxCell = currentRow.insertCell();                           //New cell
      auxCell.appendChild(document.createTextNode(dataToLoad[i][j]));  //Cell text
      auxCell.className = "cellStlye";
    }
    addImageCell(currentRow,dataToLoad[i][3]);                      //The fourth element is the image url
  }
}

  function addImageCell(row,urlImage){
    //Adds a new cell with an image for the last row of tbody
    var img = document.createElement('img');
    img.src = urlImage;
    img.alt = "Imagen";
    img.className = "imgStyle";

    var auxCell = row.insertCell();           //New cell
    auxCell.appendChild(img);                 //
    auxCell.className  = "imgCellStyle";
  }

function setPageNumber(catalog){
  let pageNumber = catalog.getPageNumber();
  let totalPages = catalog.getTotalPageNumber();
  $("#pageNumber").html("Pagina nº " + pageNumber + " de " + totalPages);
  if(pageNumber == 1){
    $( "#previousPageButton" ).prop( "disabled", true );
  }else{
    $( "#previousPageButton" ).prop( "disabled", false );
  }

  if(pageNumber >= totalPages){
    $( "#nextPageButton" ).prop( "disabled", true );
  }else{
    $( "#nextPageButton" ).prop( "disabled", false );
  }
}

function emptyTableData(tableId){
  var auxTable = document.getElementById(tableId);                  //Table element
  var tbodyRef = auxTable.getElementsByTagName('tbody')[0];         //Tbody from table
  for (let i = 0; i < tbodyRef.rows.length; i++) {
    var currentRow = tbodyRef.rows[i];
    while(currentRow.cells.length > 0){
      currentRow.deleteCell(0);
    }
  }
}

function nextPage(){
  currentCatalog.setNextPage();
  loadCatalogData(currentCatalog);
}

function previousPage(){
  currentCatalog.setPreviousPage();
  loadCatalogData(currentCatalog);
}

function sortyByTitle(){
  currentCatalog.sortyByTitle();
  loadCatalogData(currentCatalog);
}

function filterByName(name){
  currentCatalog.filterTitle(name);
  loadCatalogData(currentCatalog);  
}

function clearFilter(){
  currentCatalog.removeFilter();
  loadCatalogData(currentCatalog); 
}