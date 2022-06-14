function Catalog(data, dataLabels, tableRows) {
  //Data is an object with all the items of the catalog
  //dataLabel is an array with all the properties names of the object we want to recover
  //Catalog is an array
  this.catalog = [];                            //Variable initialization
  this.catalogFiltered = [];
  for(let i = 0; i < data.length; i++){         //
    this.catalog.push([]);                      //
    for(let j = 0; j < dataLabels.length; j++){ 
      this.catalog[i].push(data[i][dataLabels[j]]);      //We recover each property value
    }
  }
  this.currentPage = 1, //Current number of page 
  this.maxRows = tableRows, //Number of rows of the table
  this.titleOrderAsc = true; //Flag for the sort function
  this.filterOn = false;    //Flag for filter

  //Functions

  this.filterTitle = function(name) {
    this.filterOn = true;             //Now we return the filtered table only
    this.catalogFiltered = this.catalog.filter(element => element[0].includes(name));
    this.currentPage = 1;
  },

  this.removeFilter = function() {
    this.filterOn = false;             //Now we return the filtered table only
    this.currentPage = 1;
  },

  this.getEndIndex = function () {
    let auxCatalog = [];
    if(this.filterOn){    //
      auxCatalog = this.catalogFiltered;
    }else{
      auxCatalog = this.catalog;
    }

    if ((this.currentPage * this.maxRows) > auxCatalog.length) {
      return auxCatalog.length; //The last index is the last element of the catalog
    } else {
      return this.currentPage * this.maxRows;
    }
  },

  this.getStartIndex = function () {
    return ((this.currentPage * this.maxRows) - this.maxRows); //The first index 
  },

  this.getCatalogPage = function () {
    let auxCatalog = [];
    if(this.filterOn){    //
      auxCatalog = this.catalogFiltered;
    }else{
      auxCatalog = this.catalog;
    }
    return auxCatalog.slice(this.getStartIndex(), this.getEndIndex());
  };

  this.getCatalogNames = function () {
    //This function isn't affected by the filter
    let auxNombres = [];
    for(let i = 0; i < this.catalog.length; i++){
      auxNombres.push(this.catalog[i][0]);
    }
    return auxNombres;
  };

  this.setNextPage = function () {
    let auxCatalog = [];
    if(this.filterOn){    //
      auxCatalog = this.catalogFiltered;
    }else{
      auxCatalog = this.catalog;
    }

    if(this.currentPage < Math.ceil(auxCatalog.length/this.maxRows)){
      this.currentPage++;
    }
  };

  this.setPreviousPage = function () {
    if(this.currentPage > 1){
      this.currentPage--;
    }
  };

  this.getPageNumber = function () {
    return this.currentPage;
  };
  
  this.getTotalPageNumber = function () {
    let auxCatalog = [];
    if(this.filterOn){    //
      auxCatalog = this.catalogFiltered;
    }else{
      auxCatalog = this.catalog;
    }

    return Math.ceil(auxCatalog.length/this.maxRows);
  };   

  this.sortyByTitle = function(){
    
    let auxSort = "";
    if(this.titleOrderAsc){
      auxSort = function(a,b){
        return a[0][0] < b[0][0];   //The first element of the array is the product title
      };
      this.titleOrderAsc = false;
    }else{
      auxSort = function(a,b){
        return a[0][0] > b[0][0];
      };
      this.titleOrderAsc = true;
    }

    if(this.filterOn){    //
      this.catalogFiltered = this.catalogFiltered.sort(auxSort);
    }else{
      this.catalog = this.catalog.sort(auxSort);
    }
  };
}
