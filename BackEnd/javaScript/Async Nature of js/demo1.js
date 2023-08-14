function process(){
    console.log("Start")
    setTimeout(function exe(){
        console.log("I am exe (callback) function")
    },300);
    for(let i = 0;i<10000000000;i++){
        // do some task
    }
    console.log('End');
}
process();
console.log("exe function will execute only after me");