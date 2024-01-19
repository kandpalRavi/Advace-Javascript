// const url ="https://www.omdbapi.com/?apikey=fc2b8138&s=harry+potter";
// const url = "https://www.omdbapi.com/?apikey=fc2b8138&s=magic";
const url = "https://www.omdbapi.com/?apikey=fc2b8138&s=marvel";
async function getData(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.Search);
    showData(data.Search);
}

getData();

//Search
function showData(data){
    // console.log(data);
    let container = document.getElementById("container");
    data.forEach(function(elem){

        console.log(elem);
         let img  = document.createElement("img");
         img.src =elem.Poster;
         let p = document.createElement("p");
         p.innerText = elem.Title;
        
         let div = document.createElement("div");
         div.append(img,p);

        container.append(div);
    });
}