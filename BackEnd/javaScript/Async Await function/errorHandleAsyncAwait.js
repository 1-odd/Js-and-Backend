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
            let data = undefined;

            
            
            if(data != undefined){
                console.log("data downloading completed and data is",data);
                resolve(data);
            }
            else{
                reject('error');
            }

        },7000);

        
    });
}

// 2. write the data 

function writeData(data){
    return new Promise(function(resolve,reject){
        console.log("data writing  start",data);
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



// now we will create async function to consume above promises using await


async function process(){

    try{

    let downloaddata = await fatchData("www.xyz.com");
    let writedata = await writeData(downloaddata);
    let uploadfile = await uploadData(writedata,"www.abc.com");
    console.log("process completed and the response is ",uploadfile);
    return true;
}
catch(err){
    console.log(err);
}
}
// call that async function

process();


// Note there is one important thing we ant use await outside a async function