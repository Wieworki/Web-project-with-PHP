$(document).ready(function() {
  $('#loginForm').submit(function(e) { 
    e.preventDefault(); // Cancel the submit
  });
});

function validateUser(){
    //This function makes a call to the PHP in charge of the validation
    var uName = $("#UserName").val();
    var uPass = $("#UserPass").val();
    $( "input" ).prop( "disabled", true );    //The button is disabled while the query is being executed
    $("#errorMessage").text("Checking credentials");
    $.ajax({
        type: "POST",   
        url: "../php/userValidation.php",
        data: {
          userName: uName,
          userPass: uPass
        },
        success: function( result ) {
          if(result == " USER VALIDATED"){
            //Redirect to main page
            window.location.href = '../index.php';
          }else{
            $("#errorMessage").text("Invalid user-password");
            $( "input" ).prop( "disabled", false );
          }
        }
      });
}