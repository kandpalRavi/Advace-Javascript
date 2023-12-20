function backServer(){
    return false;
}

let payment_Promise = new Promise(function(res,rej){
    let pin = backServer();

    setTimeout(function(){
        if(pin){
            res("Payment Successfull!");
        }
        else{
            rej("Try again Later");
        }
    },3000);
});

// console.log(payment_Promise);

// handling the promise



let image = document.getElementById("pay_img");

// .then and .catch*****


// payment_Promise.then(function(res){
//     console.log(res);
//     image.src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif";
// });

// payment_Promise.catch(function(rej){
//     console.log(rej);
//     image.src="https://media.tenor.com/p3rrB3kJeiYAAAAM/fail-sigh.gif";
// });

// async and await ********

async function content(){
    // with async and await always use try and catch(err)**
     
    try{
        let res = await payment_Promise;
        image.src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif";
        console.log(res);
    }
    catch(err){
        console.log(err);
        image.src="https://media.tenor.com/p3rrB3kJeiYAAAAM/fail-sigh.gif";
    }
}

content();

