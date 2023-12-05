function newData (n,p){
    this.name= n;
    this.password=p;
}
let userData= JSON.parse(localStorage.getItem("userData"));
function checkData(event){
    event.preventDefault();
    let form = document.querySelector("form");
    let mail= form.mail;
    let password= form.pass;
    
    let user = new newData(mail.value,password.value);


    
}