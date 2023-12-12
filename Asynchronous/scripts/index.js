img_url =
["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvBLnvTbbTfUjfK71AoGbKIr8Iw07Ir3vRUC8ms7eUvxx-KeOkbiqq2SIBV-2OZEc54c&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDB9h_-x5zMYFqcu5kAYrv2LUb8Ysqm4bvGRXGmJL1RVNjiPFuHRGyRL-EMEGbzIGfwg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JK6wsjouiH8YeSoj_VcQd7hDTnl04VE6TtQaHSvt_N1_InKciUjq6bWzsKYJmoOFoV0&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpcYLPqoPUpll35hqUKRQgAh8T59GqE5iHOR9CmOCPay1SS6L7XQrbIJSvX1YQKxiv34&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuDkTY4yGNQxiIC9fMrFvIatQt3_kiyiXCzP7LY4x9mJlO5kzkGI9etepN8UZRR7aIIM&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMJe42EsZXxK3U4dz4GDMt6JJn5NXvGD82q3MLF87AbwqQ_nLZaQV5eSG-dmYc32AIwc&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhvFKl2OqpGMrxAKbeughwyunzm7SbeIOaQq-1QDD5ED4IrDy4-60nbQDBgcOoe9s9-w&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5LeaFoFB68C2KSfhtRDaLyl9OKidJYIVgi9JYLg3n3W8VxU5Uau5IafTt4u61Vo0aQs&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2nFleOEoowL-bCKOdU1IBxUng8Tyd66PgRJCYi8TZrd8sIsRKtggCk95OGL3WmVeVe4&usqp=CAU"
];

let i=0;
let id;
function slideShow(){
   let contener = document.querySelector("#slideshow");
    id= setInterval(function(){
        if(i==img_url.length){
            i=0;
        }
        let img = document.createElement("img");
        img.src=img_url[i];
        contener.innerHTML=null;
        contener.append(img);
        i++;
    } ,1500);


}
// Create a database of movies of your choice. Each movie object will have properties like
//  ‘name, release date, poster (add url of a poster), IMDb rating, etc.
slideShow();
let arrData=
    [
        ["The Dark Knight",2008,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvBLnvTbbTfUjfK71AoGbKIr8Iw07Ir3vRUC8ms7eUvxx-KeOkbiqq2SIBV-2OZEc54c&usqp=CAU",9.8],
        ["300",2014,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDB9h_-x5zMYFqcu5kAYrv2LUb8Ysqm4bvGRXGmJL1RVNjiPFuHRGyRL-EMEGbzIGfwg&usqp=CAU",7.7],
        ["Mage Runner",2012,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JK6wsjouiH8YeSoj_VcQd7hDTnl04VE6TtQaHSvt_N1_InKciUjq6bWzsKYJmoOFoV0&usqp=CAU",6.4],
        ["Interstellar",2014,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpcYLPqoPUpll35hqUKRQgAh8T59GqE5iHOR9CmOCPay1SS6L7XQrbIJSvX1YQKxiv34&usqp=CAU",9.9],
        ["Joker",2018,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuDkTY4yGNQxiIC9fMrFvIatQt3_kiyiXCzP7LY4x9mJlO5kzkGI9etepN8UZRR7aIIM&usqp=CAU",8.6],
        ["X-man",2008,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMJe42EsZXxK3U4dz4GDMt6JJn5NXvGD82q3MLF87AbwqQ_nLZaQV5eSG-dmYc32AIwc&usqp=CAU",6.4],
        ["Hobbit",2010,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhvFKl2OqpGMrxAKbeughwyunzm7SbeIOaQq-1QDD5ED4IrDy4-60nbQDBgcOoe9s9-w&usqp=CAU",7.8],
        ["Major",2022,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5LeaFoFB68C2KSfhtRDaLyl9OKidJYIVgi9JYLg3n3W8VxU5Uau5IafTt4u61Vo0aQs&usqp=CAU",7.7],
        ["Jaler",2022,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2nFleOEoowL-bCKOdU1IBxUng8Tyd66PgRJCYi8TZrd8sIsRKtggCk95OGL3WmVeVe4&usqp=CAU",8.0]    
        
    ]

    
// console.log(arrData);
function dataFun(n,d,i,r){
    this.name= n;
    this.releaseDate =d;
    this.url= i;
    this.rating=r;
}

let arrObj=JSON.parse(localStorage.getItem("movieData"))||[];


arrData.forEach(function(elem){
    let [name,date,url,rating] =elem;
    
    let dataObj= new dataFun(name,date,url,rating);
    arrObj.push(dataObj);
    localStorage.setItem("movieData",JSON.stringify(arrObj));
    //  console.log(arrObj);
     
});

addMovies(arrObj);

    console.log(arrObj)
    function addMovies(movie){
        
        let movies = document.getElementById("movies");
        
        
        movie.forEach(function(elem){
            // movies.innerHTML=null;
            let img= document.createElement("img");
            img.src=elem.url;
            movies.append(img);
        });
        // localStorage.setItem("movieData",JSON.stringify(null));
    }



function lowHigh(){
        let movies= JSON.parse(localStorage.getItem("movieData"));
        movies.sort(function(a,b){
                return a.rating-b.rating;
        });
        let movie = document.getElementById("movies");
        movie.innerHTML=null;
        addMovies(movies);
           
}

function highLow(){
    let movies= JSON.parse(localStorage.getItem("movieData"));
        movies.sort(function(a,b){
                return b.rating-a.rating;
        });
        let movie = document.getElementById("movies");
        movie.innerHTML=null;
        addMovies(movies);
}



