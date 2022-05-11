function validateUser(){
    //This function makes a call to the PHP in charge of the validation
    var uName = $("#UserName").val();
    var uPass = $("#UserPass").val();
    $.ajax({
        url: "../php/userValidation.php",
        data: {
          userName: uName,
          userPass: uPass
        },
        success: function( result ) {
          if(result == "USER VALIDATED"){
            alert("success");
            window.location.href = '../templates/MainPage.html';
          }else{
            $("#errorMessage").text("Invalid user-password");
          }
        }
      });
}