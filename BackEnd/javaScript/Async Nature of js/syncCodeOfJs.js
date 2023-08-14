/*
js execute the code instruction by instruction if any one of them will take some time to get execute then
it will wait for get the instruction executed before move ahead in the code. it is called the synchronous code
execution behavior of the javascript .
*/


console.log("starting");
let i =0;
while(i<100000000000){
    // some logic
    // this loop takes more then 80 seconds to get execute on my pc
    i++;
}
console.log("Ending");