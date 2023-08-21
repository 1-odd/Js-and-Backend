function fatchData(url){   
    return new Promise(function (resolve,reject){
        console.log("Data Downloading start from ",url);
        setTimeout(function processDownload(){

           
           // let data = "dummy data";
           
            let data = undefined;

            if(data != undefined){ 
                console.log("data downloading completed ");
                resolve(data);
            }
            else{
                reject("some error found, please review");
            }


        },700);

        
    });
}

let x = fatchData("JASHGKDSKHB");

x.then(function f1(value){
    console.log("value of f1 is",value);
    return value + 12;
})
.then(function f2(value){
    console.log("value of f2 is ",value);
})
.catch(function err(err){ // error handle here
    console.log(err);
});