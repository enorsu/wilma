





var loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", realLogin);

var password;
var username;



function realLogin() {
    password = document.getElementById("password").value;
    username = document.getElementById("login-frontdoor").value;

    if(username == "github") {
        if(password ==  "") {
            window.location = ""


        }
    }
}