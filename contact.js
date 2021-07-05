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