const url = "https://fakestoreapi.com/products";


async function getData(){
    
    try{
        let res = await fetch(url);
        let data = await res.json();   //collecting data from fetch
   
        console.log(data);
        append(data);
    }
    catch(err){
        console.log(err);
    }
}

getData();


// function append(data){
//     let contener = document.getElementById("contener");
//     data.forEach(function(el){
//         let img = document.createElement("img");
//         img.src= el.image;
//         let p = document.createElement("p");
//         p.innerText= el.title;
//         let price  = document.createElement("p");
//         price.innerText= el.price;
//         let div = document.createElement("div");
//         div.append(img,p,price);
//         contener.append(div);
//     });
// }




function append(data){
    let contener = document.getElementById("contener");
    data.forEach(function(elem){
        let img = document.createElement("img");
        img.src=elem.image;

        let p = document.createElement("p");
        p.innerText = elem.title;

        let price = document.createElement("p");
        price.innerText = elem.price;

        let div = document.createElement("div");
        div.append(img,p,price);

        contener.append(div);
    });
}