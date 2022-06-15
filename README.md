# Web-project-with-PHP
Web page for a local business. 

The stakeholder needed a page to show the business products with it prices, so a catalog table with all the products was build.
The page also has a functionality to keep track of the current stock of each product, so it can show a messasge to the
costumers when a product doesn´t have stock available.

Data base structure:

User Table:
  -Id
  -Username (PK)
  -Password
  -Nombre
  -Apellido
  -Email
  
Manga:
  -Id
  -Nombre     (PK)
  -IdEditorial  (FK)
  -Descripcion
  -UrlImagen
 
Volumen:
  -Id
  -IdManga  (FK)
  -Numero
  -Descripcion
  -Precio
  -UrlPortada

GeneroManga:
  -Id
  -IdManga  (FK)
  -IdGenero (FK)

Genero:
  -Id
  -Nombre (PK)
  
Editorial:
  -Id
  -Nombre
