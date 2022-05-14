$(document).ready(function() {
    $(function(){
        //NavBar 
        $( "#navBarUbication" ).load( "templates/navBar.html", function() {
            //We have to change the attr of the navBar
            document.getElementById("homeNavBar").setAttribute("href", "../../index.php");
            document.getElementById("LogInNavBar").setAttribute("href", "../../php/Login.php");
            document.getElementById("LogOutNavBar").setAttribute("href", "../../php/LogOut.php");

            document.getElementById("LogInNavBar").hidden = false; //User is already logged in if is seeing the page
            document.getElementById("LogOutNavBar").hidden = true;
          });
      });
  });
  