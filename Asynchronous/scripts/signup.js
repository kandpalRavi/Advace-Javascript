function UserData (n,c,m,p){
    this.name=n;
    this.contact=c;
    this.mail=m;
    this.password=p;
}

function userData(event){
    event.preventDefault()
   let form= document.getElementById("form");
   let name= form.name;
   let contact = form.contact;
   let mail = form.mail;
   let password = form.pass;

  if(name.value!="" && contact.value!="" && mail.value != "" && password.value != ""){
    let user = new UserData(name.value,contact.value,mail.value,password.value);
    console.log(user)
    let dataArr =JSON.parse(localStorage.getItem("userData"))||[];
    dataArr.push(user);
    localStorage.setItem("userData" ,JSON.stringify(dataArr));
    name.value=null,contact.value=null,mail.value=null,password.value=null;

  }
  else{
    alert("plese fill the form");
  }

  document.location.href="login.html";
}