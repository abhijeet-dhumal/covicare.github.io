function sign_up_validate() {
    let uemail = document.getElementById("exampleInputEmail1");
    let upassword = document.getElementById("exampleInputPassword1");
    if (uemail.value == "abhijeet@gmail.com" && upassword.value == "abhi") {
        alert("Welcome " + uemail.value + " to Covicare !!!");
    }
    else {
        alert("please enter valid input!!!");
    }
}
function register_validate() {
    let uname = document.getElementById("loginInputText");
    let uemail = document.getElementById("exampleInputEmail2");
    let upassword = document.getElementById("exampleInputPassword2");
    if (uname.value == "abhijeet" && uemail.value == "abhijeet@gmail.com" && upassword =="abhi") {
        alert("Welcome Abhijeet!!!");
    }
    else {
        alert(uname.value + " " + uemail.value + " " + upassword.value + " please enter valid input");
    }
}
