function demo(val){
    return new Promise(function(resolve,reject){
        console.log("start");


        setTimeout(function process(){

            console.log("Timer completed")

            if( val %2 ==0){
                resolve("Even")
            }else{
                reject('odd')
            }
            console.log("completed");

        },5000);



        console.log("somewhere");
    })
}

let pro = demo(8);
console.log(pro);