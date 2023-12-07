
function checkData(event){
    event.preventDefault();
    let form = document.querySelector("form");
    let mail= form.mail;
    let password= form.pass;
    
    
   if(check(mail,password)){
        window.location.href="index.html";
   }
   else {
        if(mail.value=="" && password.value==""){
            alert("please enter email or password");
        }
        else {
            alert("invalid Credentials");
            mail.value=null,password.value=null;
        }
    
   }
    
}

function check(mail,password){
    let userData= JSON.parse(localStorage.getItem("userData"));
    if(mail.value=="" && password.value==""){
        return false;
    }
    for(let i=0;i<userData.length;i++){
        if(mail.value==userData[i].mail && password.value==userData[i].password){
            return true;
        }
    }

    return false;
}