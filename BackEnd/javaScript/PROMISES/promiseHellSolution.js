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
            let filename  = "book.txt";
            console.log("writing data completed and file name is ",filename);
            
            resolve(filename);
        },5000);
    });
}

// 3. upload that file

function uploadData(filename,url){
    return new Promise(function(resolve,reject){
        console.log("data uploading start at ",url);
        setTimeout(function processUpload(){
            console.log("uploading data completed");
            let response  = "sucess";
            resolve(response);
        },5000);
    });
}


// call the promise function using .then()
// there is one catch .then() function consume a promise and its callback function create a new promise and return a value


let downloaddata = fatchData("www.abc.com");
downloaddata
.then(function processDownload(value){
    console.log("downloaded data is ",value);
    return value; // return a new promise (value)
})

.then(function processWrite(value){
    // it consume above promise and return a new promise
    return writeData(value);
    
})
.then(function processUploadata(value){
    // it consume above promise and return a new promise
    var url ="http://localhost:81/api/";
    
    return result= uploadData(value ,url );
    
    

})
.then(function process(){
    console.log('all done');
});
