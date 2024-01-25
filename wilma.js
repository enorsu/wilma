




var sourceCodeButton = document.getElementById("source-code-button");
sourceCodeButton.addEventListener("click", openSourceCode);

var loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", realLogin);

var specialLogin = document.getElementById("special-button");
specialLogin.addEventListener("click");

var password;
var username;



function realLogin() {
    password = document.getElementById("password").value;
    username = document.getElementById("login-frontdoor").value;
    
    if(username == "raineri") {
        if(password == "raineri") {
            window.location = "tribute.html";
        }
    }

    if(username == "") {
        if(password ==  "") {
            alert("TYHJÄ")


        }
    }
}

function openSourceCode() {
    window.location.href = "https://github.com/enorsu/wilma"
}

function secretFunc() {
    window.location.href = "";
}