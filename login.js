var references  = {};
function myinit(){
    getreferences();
    fillitem();
}
function getreferences(){
    references.username = document.getElementById("username");
    references.password = document.getElementById("password");
}
function fillitem(){
    references.username.value = localStorage.getItem("Username");
    references.password.value = localStorage.getItem("Password");
}
function themain(){
    var localData = localStorage;
    var username = references.username.value;
    var password = references.password.value;
    localData.setItem("Username", username);
    localData.setItem("Password", password);
    }
myinit();