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
    alert(uname.value +" " + uemail.value +" " + upassword.value);
}
function contact_info() {
    let uname = document.getElementById("contact_name");
    let uemail = document.getElementById("contact_email");
    let uno = document.getElementById("cantact_no");
    let umsg = document.getElementById("contact_msg");
    if (uname.value == "abhijeet" && uemail.value == "abhijeet@gmail.com") {
        alert(uname.value + ", Your response has been submitted to Covicare !!!");
    }
    else {
        alert("please enter valid input!!!");
    }
}
