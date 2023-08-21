// here we have a question how we can add more function in fullfillment array for a same resolution means for the single promise


function fun(){
    return new Promise(function f(resolve,reject){
        setTimeout(function process(){
            console.log("Resolve ");
            let data  = "rama";
            resolve(data);
            // if(data!=undefined){
            //     console.log("sucessfully execute");
            //     resolve(data);
            // }else{
            //     reject(data);
            // }
            
        },5000);
    });
}


// create a object for above promise and add more then one callback function for fulfillment array

let x = fun(); // creating object 

x.then(function fun1(value){ //  callback 1
    console.log("value of fun1 is",value);
        return(100)// 
});
x.then(function fun2(value){ // callback 2
    console.log('value of fun2 is', value) ;
   
     });


// above both callbacks are for same promise objext (x);