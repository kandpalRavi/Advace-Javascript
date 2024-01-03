let data = JSON.parse(localStorage.getItem("data"));
addProduct(data);

function addProduct(data){
    let productsData = document.querySelector("#products_data");
    productsData.innerHTML =null;
    data.forEach(function(elem,index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.img;
        let brand = document.createElement("h3");
        brand.innerText = elem.brand;
        let name = document.createElement("p");
        name.innerText= elem.name;
        let button = document.createElement("button");
        button.innerText= "Remove";
        button.addEventListener("click",function(){
            dataRemove(index);
        })

        div.append(img,brand,name,button);
        productsData.append(div);
    });
}

function dataRemove(index){
    data.splice(index,1);
    localStorage.setItem("data",JSON.stringify(data));
    addProduct(data);
}


function changeWindow(){
    window.location.href= "index.html";
}
