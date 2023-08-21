function fetchCustom(url,fn){
    // it is a prototype function to download th econtent from the target url
    // this downloading can take some time

    // in this function we will download the content from the  url and whatever the result pass it to callback function


    console.log("starting downloading data from",url);
    setTimeout( function process(){
        console.log("Downloading completed ");;
        let response = "dummy data";
        fn(response);
        console.log("Ending the function");
    } ,3000);
}

fetchCustom("www.google.com",function result(response){
    console.log("Downloaded response is ",response);
    
});