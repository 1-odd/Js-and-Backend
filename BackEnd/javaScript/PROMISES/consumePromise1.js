/*
we have question to solve that have three conditin
1. write a promise to feth some data from a url
2. write that data into a file and return the name of that file
3. using the file name upload that file on a url(website)
*/


// 1. fetch data from url

function fatchData(url){   
    return new Promise(function (resolve,reject){
        console.log("Data Downloading start from ",url);
        setTimeout(function processDownload(){

            console.log("data downloading completed ");
            let data = "dummy data";

            resolve(data);


        },7000);

        
    });
}

// 2. write the data 

function writeData(data){
    return new Promise(function(resolve,reject){
        console.log("data write start");
        setTimeout(function processWrite(){
            console.log("writing data completed");
            let filename  = "book.txt";
            resolve(filename);
        },5000);
    });
}

// 3. upload that file

function uploadData(filename,url){
    return new Promise(function(resolve,reject){
        console.log("data uploading start");
        setTimeout(function processUpload(){
            console.log("uploading data completed");
            let response  = "sucess";
            resolve(response);
        },5000);
    });
}





// call all of these method using .then() function so these function will perform proper execution and fulfill the expectation\


let downloadData = fatchData("www.googledrive.com");
downloadData.then(function process(value){
    console.log("data download promise fulfilled");
    console.log(value);

    // now call write data function 

    let writedta = writeData(value);
    writedta.then(function process(value){
        console.log("write data promise fulfilled");
        console.log(value);

        //now call uplaod data

        let uploadedata= uploadData(value,"http://localhost:81/api/");
        uploadedata.then(function process(value){
            console.log('uploade data promise fullfilled');
            console.log(value);
        });
    });
});


// we used third property of promise here (onfulfillment) it like a array that have some function those are attach
// using .then() methods in upppar code those function we called under the .then() method are the function
// of that array(onfulfillment).