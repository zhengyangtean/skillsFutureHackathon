function showHidePassword() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

$(document).ready(function(){
    $( "#loginButton" ).click(function() {
      window.top.location.href = "/profile.html"; 
    });
});