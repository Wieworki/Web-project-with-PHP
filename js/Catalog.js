function Catalog(data, dataLabels, tableRows) {
    //Data is an object with all the items of the catalog
    //Label is an array with all the properties names of the object we want to recover
    //Catalog is an array
    this.catalog = [];                            //Variable initialization
    for(let i = 0; i < data.length; i++){         //
      this.catalog.push([]);                      //
      for(let j = 0; j < dataLabels.length; j++){ 
        this.catalog[i].push(data[i][dataLabels[j]]);      //We recover each property value
      }
    }
    this.currentPage = 1, //Current number of page 
    this.maxRows = tableRows, //Number of rows of the table
    //Functions
    this.getEndIndex = function () {
      if ((this.currentPage * this.maxRows) > this.catalog.length) {
        return this.catalog.length; //The last index is the last element of the catalog
      } else {
        return this.currentPage * this.maxRows;
      }
    },

    this.getStartIndex = function () {
      return ((this.currentPage * this.maxRows) - this.maxRows); //The first index 
    },

    this.getCatalogPage = function () {
      return this.catalog.slice(this.getStartIndex(), this.getEndIndex());
    };

    this.getNextPage = function () {
      if(this.currentPage < Math.ceil(this.catalog.length/this.maxRows)){
        this.currentPage++;
      }
    };

    this.getPreviousPage = function () {
      if(this.currentPage > 1){
        this.currentPage--;
      }
    };

    this.getPageNumber = function () {
      return this.currentPage;
    };

    this.getTotalPageNumber = function () {
      return Math.ceil(this.catalog.length/this.maxRows);
    };   
}
