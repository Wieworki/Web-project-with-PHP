$(document).ready(function() {
    $(function(){
        //NavBar 
        $( "#navBarUbication" ).load( "templates/navBar.html", function() {
            //We have to change the attr of the navBar
            document.getElementById("homeNavBar").setAttribute("href", "../../index.php");
            document.getElementById("LogOutNavBar").setAttribute("href", "../../php/LogOut.php");
            document.getElementById("UserManagementNavBar").setAttribute("href", "../../php/admin/UserManagement.php");

            document.getElementById("UserManagementNavBar").hidden = false;
            document.getElementById("LogInNavBar").hidden = true; //User is already logged in if is seeing the page
            document.getElementById("LogOutNavBar").hidden = false;
          });
      });
  });
  