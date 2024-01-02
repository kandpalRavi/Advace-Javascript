//store the products array in localstorage as "data"

//using constructor function to create obj--
function AllData(brand,name,price,img){
    this.brand = brand;
    this.name= name;
    this.price= price;
    this.img= img;
}

function pushData(event){
    event.preventDefault(); 
    let form = document.querySelector("form");
    let brand = form.product_brand;
    let name = form.product_name;
    let price = form.product_price;
    let img =   form.product_image;

    // console.log(brand.value,name.value,price.value,img.value);
    if(brand.value!=="" && name!=="" && price.value !=="" && img.value !==""){
        let objData= new AllData(brand.value,name.value,Number(price.value),img.value);

        
        let arrObj = JSON.parse(localStorage.getItem("data"))||[];
        arrObj.push(objData);
        localStorage.setItem("data" ,JSON.stringify(arrObj));
        brand.value=null, name.value=null,price.value=null,img.value=null;
    }
    else {
        alert("please fill the from");
    }
    
}


function changeWindow(){
    window.location.href="inventory.html";
}

