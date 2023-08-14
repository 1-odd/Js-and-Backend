/*
x --> number
fn --> callback function
 */

function fun (x , fn){
    
    for(let i =0;i<x;i++){
        console.log(i);
       
    }
     fn(); // calling callback function
}

function log(){ // this is callback function
    console.log("Custom function");

}

fun(10,log);