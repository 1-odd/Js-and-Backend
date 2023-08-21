function fatchData(url){   
    return new Promise(function (resolve,reject){
        console.log("Data Downloading start from ",url);
        setTimeout(function processDownload(){

           
            let data = "dummy data";

            if(data != undefined){ 
                console.log("data downloading completed ");
                resolve(data);
            }
            else{
                reject("some error found, please review");
            }


        },7000);

        
    });
}

let x = fatchData("www.googledrive.com");
x.then(function success(value){ // .then have 2 function 1 for success , 1 for rejection(error)
    console.log("Downloaded data is ",value);
},
function error(err){ // error handle in this function
    console.log(err);
});