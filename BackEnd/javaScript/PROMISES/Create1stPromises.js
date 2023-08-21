/*
promises is a object that is already defined in js
when we create promises it call the promises constructer (new Promises())
we will pass a callback function as an argument in promises (new Promises(function(){}))
that call back function expect 2 perameter (resolve,reject)
resolve,reject are the function those help to return the result. and these function is already defined in the js.

 */

// lets create a promises that fetch some data from a url

function fetchdata(url){
    return new Promise(function callback(resolve,reject){
        console.log("start fethcing tha data from the" ,url);

        // put some logic and get the data 
        setTimeout(function process(){
            let data = "dummy data";
            console.log("fething completed");
            resolve(data);  // now return the result data using resolve function
        },4000);
        
        

        
    });
}


// example 2


function fetch1(url){
    return new Promise(function(resolve,reject){

        // some logic

        console.log("starting")

        for(let i =0;i<10000000;i++){
            // some logic
        }

        console.log("completed")
        resolve("Data");

    })
}







let x = fetch1("www.promises.com");
console.log(x);