// https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=c984d6c101a8db58030a063a2e62de15

//https://api.openweathermap.org/data/2.5/weather?q=bageshwar&appid=6fc0dca84af8e3e9da99280d368656c8



function getData(){
    let city = document.querySelector("#query").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fc0dca84af8e3e9da99280d368656c8`;

    fetch(url).then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        showData(res);
    })
    .catch(function(rej){
        console.log(rej);
    });
}

function showData(data){
    let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    // let url=`https://maps.google.com/maps?q=bageshwar&t=&z=13&ie=UTF8&iwloc=&output=embed`;


    let container = document.querySelector("#container");

     container.innerHTML = null;
     let h2 =document.createElement("h2");
     h2.innerText = data.name;

    let temp = document.createElement("p");
    temp.innerText = `Temp :- ${data.main.temp}`;
    container.append(h2,temp);


    let isframe = document.getElementById("gmap_canvas");
    isframe.src = url;
}


function getLocation(){
    navigator.geolocation.getCurrentPosition(success);

    function success(pos) {
        const crd = pos.coords;
      
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getWeatherOnLocation(crd.latitude,crd.longitude);
    }

}

getLocation();




function getWeatherOnLocation(lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6fc0dca84af8e3e9da99280d368656c8`
    fetch(url).then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        showData(res);
    })
    .catch(function(rej){
        console.log(rej);
    });
}