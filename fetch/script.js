const url= "https://reqres.in/api/users?page=2";

fetch(url)
    .then(function(res){
        return res.json(); //colleted part is also promise because it is taking time to collect data
    })
    .then(function(res){
        console.log(res);
        append(res.data);
    })
    .catch(function(err){
        console.log(err);
    });




function append(data){
    let contener = document.getElementById("contener");
    data.forEach(function(el){
        let img = document.createElement("img");
        img.src= el.avatar;
        let p = document.createElement("p");
        p.innerText=`${el.first_name} ${el.last_name}`

        let div = document.createElement("div");
        div.append(img,p);
        contener.append(div);
    })
}